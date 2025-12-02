import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service';
import { CreateUsuarioDto } from 'src/usuarios/dto/create-usuario.dto';
import { CreateVerificationDto } from 'src/verification/dto/create-verification.dto';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt'; // Importar bcrypt para hashear la contra del usuario
import { MailService } from 'src/mail/mail.service'; // Importar el servicio de Mail
import { VerificationService } from 'src/verification/verification.service';
import { JwtService } from '@nestjs/jwt';
import { CategoriasService } from 'src/categorias/categorias.service';
import { PerfilesService } from 'src/perfiles/perfiles.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsuariosService, 
        private mailService: MailService,
        private verificationService: VerificationService,
        private jwtService: JwtService,
        private categoriasService: CategoriasService,
        private perfilesService : PerfilesService,
        private prisma: PrismaService
    ) {}
    
    // Método para iniciar sesión
    async signIn(authDto: AuthDto): Promise<{ access_token: string }> {
        const usuario = await this.userService.findByCorreo(authDto.correo);

        // Verifica que el usuario exista
        if (!usuario) {
            throw new UnauthorizedException('Usuario no encontrado');
        }

        // Compara la contraseña ingresada con la guardada en la BD.
        const passwordHash = await bcrypt.compare(authDto.contrasena, usuario?.contrasena);

        // Verificar si las credenciales coinciden o no.
        if (!passwordHash) {
            throw new UnauthorizedException('Contraseña incorrecta');
        }
        
        // Crea y retorna el token JWT
        const payload = { sub: usuario.id_usuario, mail: usuario.correo };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }

    // Método para registrar un usuario nuevo
    async signUp(createUsuarioDto: CreateUsuarioDto): Promise<{ access_token: string, mensaje: string }> {
        const fechaActual = new Date();
        // Buscar el código de verificación asociado al correo
        const codigoVerificacion = await this.verificationService.getVerificationCode(createUsuarioDto.correo);

        if (!codigoVerificacion?.codigo) {
            throw new NotFoundException('No se encontró un codigo de verificación');
        }
        
        const verificarExpiracionCodigo = this.verifyExpirationCode(fechaActual, codigoVerificacion?.expiracion);
        // Verificar que el código siga vigente
        if (!verificarExpiracionCodigo) {
            throw new Error('El código de verificación ha expirado');
        }

        // Comparar el código ingresado con el almacenado
        if (Number(createUsuarioDto.codigoVerificacion) !== Number(codigoVerificacion.codigo)) {
            // opcional: incrementar contador de intentos en la BD
            throw new BadRequestException('Código de verificación incorrecto');
        }

        // Crear el nuevo usuario a la BD.
        const newUsuario = await this.userService.create(createUsuarioDto);

        if (!newUsuario) {
            throw new UnauthorizedException('Error al abrir la cuenta');
        }

        // Crear token directamente sin necesidad de llamar a signIn
        const payload = { sub: newUsuario.id_usuario, mail: newUsuario.correo };
        const access_token = await this.jwtService.signAsync(payload);

        // Crea las categorías por defecto del usuario
        this.categoriasService.createDefaultCategories(newUsuario.id_usuario);
        // Crea el perfil de administrador al nuevo usuario
        this.perfilesService.createAdminProfile(newUsuario.id_usuario);

        return {
            mensaje: 'Bienvenido a Finnancer',
            access_token
        };
    }

    // Este método es el que se llama desde el frontend para enviar el correo de verificación
    async prepareSendMail(to: string, name: string): Promise<void> {
        const validarCorreo = await this.userService.findByCorreo(to);

        // Validar que el correo no haya sido registrado anteriormente
        if (validarCorreo) {
            throw new UnauthorizedException('El correo ya esta registrado');
        }

        const fechaActual = new Date();
        // Crear el tiempo de expiración del código
        const expiracion = new Date(fechaActual.getTime() + 10 * 60 * 1000);

        // Genera el código de verificación
        const verificationCode = this.mailService.generateVerificationCode(100000, 999999);

        let createVerificationDto: CreateVerificationDto = {
            nombre: name,
            correo: to,
            codigo: verificationCode,
            creadoEn: fechaActual,
            expiracion: expiracion,
        };

        // Envía el correo
        await this.sendVerifyMail(to, name, verificationCode);

        // Crea el codigo de verificacion y los datos necesarios, a la BD
        await this.verificationService.createVerificationCode(createVerificationDto);
    }

    // Método que envía el correo
    async sendVerifyMail(to: string, name: string, verificationCode: number): Promise<void> {
        await this.mailService.sendMailVerification(
            to, 'Verificar Correo Electrónico',
            './verify-mail',
            { name, verificationCode },
        )
    }

    // Función que prepara envíar el correo al usuario para recuperar su contraseña
    async prepareSendMailRecoverPassw(to: string) {
        const correoExistente = await this.verifyMail(to);

        // Verifica que el correo exista
        if (!correoExistente) {
            throw new UnauthorizedException('El correo no existe');
        }

        const fechaActual = new Date();
        // Crear el tiempo de expiración del código
        const expiracion = new Date(fechaActual.getTime() + 10 * 60 * 1000);
        const verificationCode = this.mailService.generateVerificationCode(100000, 999999);

        let createVerificationDto: CreateVerificationDto = {
            nombre: correoExistente.nombre,
            correo: to,
            codigo: verificationCode,
            creadoEn: fechaActual,
            expiracion: expiracion,
        };
        
        // Crea el codigo de verificacion y los datos necesarios, a la BD
        await this.verificationService.createVerificationCode(createVerificationDto);

        await this.sendMailRecoverPassw(to, correoExistente.nombre, verificationCode);
    }

    // Método que envía el correo para recuperar la contraseña del usuario
    async sendMailRecoverPassw(to: string, name: string, verificationCode: number): Promise<void> {
        await this.mailService.sendMailVerification(
            to, 'Recuperar Contraseña',
            './change-passw',
            { name, verificationCode },
        )
    }

    // Método que valida el código acuando el usuario quiere cambiar su contraaseña
    async validateCode(correo: string, codigoIngresado: number) {
        const fechaActual = new Date();
        
        // Buscar el código de verificación asociado al correo
        const codigoVerificacion = await this.verificationService.getVerificationCode(correo);

        if (!codigoVerificacion?.codigo) {
            throw new NotFoundException('No se encontró un codigo de verificación');
        }
        
        const verificarExpiracionCodigo = this.verifyExpirationCode(fechaActual, codigoVerificacion?.expiracion);
        // Verificar que el código siga vigente
        if (!verificarExpiracionCodigo) {
            throw new Error('El código de verificación ha expirado');
        }

        // Comparar el código ingresado con el almacenado
        if (Number(codigoIngresado) !== Number(codigoVerificacion.codigo)) {
            throw new BadRequestException('Código de verificación incorrecto');
        }

        return {
            mensaje: '¡Código Válido!',
        };
    }

    // Método que verifica si el código esta expirado
    verifyExpirationCode(fechaActual: Date, expiracion: Date): boolean {
        if (fechaActual > expiracion) return false;
        else return true;
    }

    // Función que valida si el correo es existente
    async verifyMail(to: string) {
        return await this.userService.findByCorreo(to);
    }
}

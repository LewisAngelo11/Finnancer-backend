import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt'; // Importar bcrypt para hashear la contra del usuario

@Injectable()
export class UsuariosService {
  fechaAlta = new Date();

  constructor(private prisma: PrismaService) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    //Hashear la contraseña antes de guardarla a la BD.
    const saltOrRounds = 10;
    const hash = createUsuarioDto.contrasena;
    const passHash = await bcrypt.hash(hash, saltOrRounds);

    createUsuarioDto.contrasena = passHash;
    createUsuarioDto.fechaCreacion = this.fechaAlta;

    const usuarioCreado = await this.prisma.usuario.create({
      data: {
        nombre: createUsuarioDto.nombre,
        apellido_paterno: createUsuarioDto.apellidoP,
        apellido_materno: createUsuarioDto.apellidoM,
        correo: createUsuarioDto.correo,
        contrasena: createUsuarioDto.contrasena,
        fecha_creacion: createUsuarioDto.fechaCreacion,
      },
    });

    return usuarioCreado; // Retorna el usuario creado
  }

  // Función que busca un usuario por el correo electrónico
  async findByCorreo(correo: string) {
    return await this.prisma.usuario.findUnique({
      where: { correo },
    });
  }

  // Este método crea los parametros financieros del usuario
  async createFinanceParams(correo: string, updateUsuarioDto: UpdateUsuarioDto) {
    await this.prisma.usuario.update({
      where: {
        correo: correo
      },
      data: {
        presupuesto: updateUsuarioDto.presupuesto,
        ingreso_minimo: updateUsuarioDto.ingresos,
        egreso_maximo: updateUsuarioDto.egresos,
        ahorro_mensual: updateUsuarioDto.ahorroMensual,
        dia_corte: Number(updateUsuarioDto.diaCorte),
      },
    });

    return {
      mensaje: '¡Datos actualizados correctamente!'
    };
  }

  // Método que actualiza los datos personales del usuario autenticado
  async updateInfo(correo: string, updateUsuarioDto: UpdateUsuarioDto) {
    await this.prisma.usuario.update({
      where: {
        correo
      },
      data: {
        nombre: updateUsuarioDto.nombre,
        apellido_paterno: updateUsuarioDto.apellidoP,
        apellido_materno: updateUsuarioDto.apellidoM,
      },
    });

    return {
      mensaje: '¡Datos actualizados correctamente!',
      datos: updateUsuarioDto
    }
  }

  // Método que cambia la contraseña dek usuario, primero verificando la actual
  async updatePassw(correo: string, passw: string, newPassw: string) {
    const contraValida = await this.validatePassw(correo, passw);

    if (!contraValida) {
      throw new UnauthorizedException('La contraseña actual es errónea.');
    }

    const passwordHash = await this.hashPassw(newPassw);

    await this.prisma.usuario.update({
      where: {
        correo
      },
      data: {
        contrasena: passwordHash,
      }
    });

    return {
      mensaje: '¡Contraseña actualizada correctamente!',
    };
  }

  // Este método retorna los datos de un usuario sin la contraseña
  async getInfoUsuario(correo: string) {
    const usuarioConsultado = await this.findByCorreo(correo);

    if (!usuarioConsultado) {
      throw new Error('Usuario no encontrado.');
    }
    // Extrae la contraseña de los datos del usuario, por seguridad
    const { contrasena, ...datosUsuarios } = usuarioConsultado;

    return datosUsuarios;
  }

  // Función que verifica la contraseña actual del usuario
  async validatePassw(email: string, passw: string): Promise<boolean> {
    const usuario = await this.findByCorreo(email);

    const password = await bcrypt.compare(passw, usuario?.contrasena);

    if (!password) {
      return false;
    }

    return true;
  }

  // Función que encripta la contraseña
  async hashPassw(passw: string) {
    const saltOrRounds = 10;
    const hash = passw;
    
    return await bcrypt.hash(hash, saltOrRounds);
  }

  // Método para restablecer la contraseña sin pedir la contraseña actual
  async resetPassword(correo: string, newPassword: string) {
    // Buscar usuario por correo
    const usuario = await this.findByCorreo(correo);

    if (!usuario) {
      throw new UnauthorizedException('No existe un usuario con este correo.');
    }

    // Hashear la nueva contraseña
    const newPassHash = await this.hashPassw(newPassword);

    // Actualizar contraseña en BD
    await this.prisma.usuario.update({
      where: { correo },
      data: {
        contrasena: newPassHash
      }
    });

    return {
      mensaje: 'La contraseña ha sido restablecida exitosamente.'
    };
  }
}

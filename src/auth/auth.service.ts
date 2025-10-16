import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt'; // Importar bcrypt para hashear la contra del usuario

@Injectable()
export class AuthService {
    constructor(private userService: UsuariosService) {}
    
    // Método para iniciar sesión (Falta agregar el token JWT)
    async signIn(authDto: AuthDto): Promise<any> {
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
        // Extrae el atributo contraseña en el result
        const { contrasena, ...result } = usuario;
        return result;
    }
}

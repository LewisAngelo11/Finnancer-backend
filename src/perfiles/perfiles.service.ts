import { Injectable } from '@nestjs/common';
import { CreatePerfileDto } from './dto/create-perfile.dto';
import { UpdatePerfileDto } from './dto/update-perfile.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PerfilesService {
    constructor(private prisma: PrismaService) {}

    // Función que crea un nuevo perfil
    async createProfile(idUsuario: number, createProfileDto: CreatePerfileDto) {
        const fechaActual = new Date()
        const perfil = await this.prisma.perfil.create({
            data: {
                nombre: createProfileDto.nombre,
                icono: createProfileDto.icono,
                fecha_creacion: fechaActual,
                pin: createProfileDto.pin,
                id_usuario: idUsuario,
            },
        });

        return perfil;
    }

    // Método que crea el perfil de Administrador que es el predeterminado y el que tiene todos los permisos
    async createAdminProfile(idUsuario: number) {
        const nombrePerfil = 'Administrador';
        const iconoPerfil = 1;
        const fechaActual = new Date();

        // Crea el perfil de Administrador por defecto
        const adminPerfil = await this.prisma.perfil.create({
            data: {
                nombre: nombrePerfil,
                icono: iconoPerfil,
                fecha_creacion: fechaActual,
                id_usuario: idUsuario,
            },
        });

        return adminPerfil;
    }

    // Método que obtiene todos los perfiles del usuario
    async getAllProfiles(idUsuario: number) {
        const perfiles = await this.prisma.perfil.findMany({
            where: {
                id_usuario: idUsuario,
            },
        });

        return perfiles;
    }

    // Método que da de baja un perfil del usuario
    async disableProfile(updatePerfilDto: UpdatePerfileDto) {
        await this.prisma.perfil.update({
            where: {
                id_perfil: updatePerfilDto.idPerfil,
            },
            data: {
                estatus: 'baja',
            },
        });

        return {
            mensaje: 'El perfil fue dado de baja.',
        };
    }

    // Método que habilita un perfil del usuario
    async enableProfile(updatePerfilDto: UpdatePerfileDto) {
        const perfil = await this.prisma.perfil.update({
            where: {
                id_perfil: updatePerfilDto.idPerfil,
            },
            data: {
                estatus: 'activo',
            },
        });

        return {
            mensaje: 'El perfil se habilitó.',
            perfil,
        }
    }
}

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreatePerfileDto } from './dto/create-perfile.dto';
import { UpdatePerfileDto } from './dto/update-perfile.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PerfilesService {
    constructor(private prisma: PrismaService) {}

    // Función que crea un nuevo perfil
    async createProfile(idUsuario: number, createProfileDto: CreatePerfileDto) {
        const fechaActual = new Date()

        let pinHash: any;
        if (createProfileDto.pin) {
            pinHash = await this.hashPin(createProfileDto.pin);
        }

        const perfil = await this.prisma.perfil.create({
            data: {
                nombre: createProfileDto.nombre,
                icono: createProfileDto.icono,
                fecha_creacion: fechaActual,
                pin: pinHash,
                id_usuario: idUsuario,
            },
        });

        return perfil;
    }

    async updateProfile(idUsuario: number, idPerfil: number, updatePerfilDto: UpdatePerfileDto) {
        let pinHash: any;
        if (updatePerfilDto.pin) {
            pinHash = await this.hashPin(updatePerfilDto.pin);
        }
        const perfil = await this.prisma.perfil.update({
            where: {
                id_usuario: idUsuario,
                id_perfil: idPerfil,
            },
            data: {
                nombre: updatePerfilDto.nombre,
                icono: updatePerfilDto.icono,
                pin: pinHash,
                estatus: updatePerfilDto.estatus,
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
                super_usuario: true,
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
            orderBy: {
                id_perfil: 'asc'
            }
        });

        return perfiles;
    }

    // Método que retorna únicamente los perfiles activos
    async getAllActiveProfiles(idUsuario: number) {
        const perfiles = await this.prisma.perfil.findMany({
            where: {
                id_usuario: idUsuario,
                estatus: 'activo',
            },
            orderBy: {
                id_perfil: 'asc'
            }
        });

        return perfiles;
    }

    // Función que retorna un perfil por su ID
    async getOneProfile(idPerfil: number) {
        const perfil = await this.prisma.perfil.findUnique({
            where: {
                id_perfil: idPerfil,
            },
        });

        return perfil;
    }

    // Función que encripta el pin de acceso del perfil
    async hashPin(pin: string) {
        const saltOrRounds = 10;
        const hash = pin;
        
        return await bcrypt.hash(hash, saltOrRounds);
    }

    // Método que valida el pin del perfil
    async validatePinProfile(updatePerfilDto: UpdatePerfileDto) {
        const perfil = await this.getOneProfile(updatePerfilDto.idPerfil);

        if (!perfil) {
            throw new Error('El perfil no fue encontrado');
        }

        const pinHashed = await bcrypt.compare(updatePerfilDto.pin, perfil.pin);

        if (!pinHashed) {
            throw new UnauthorizedException('El PIN proporcionado no es correcto.');
        }

        return true;
    }
}

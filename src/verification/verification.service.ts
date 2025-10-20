import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateVerificationDto } from './dto/create-verification.dto';

@Injectable()
export class VerificationService {
    constructor(private prisma: PrismaService) {}

    // Métdo para crear el codigo de verificación de correo a la BD.
    async createVerificationCode(createVerificationDto: CreateVerificationDto) {
        await this.prisma.verificacion.create({
            data: {
                nombre: createVerificationDto.nombre,
                correo: createVerificationDto.correo,
                codigo: createVerificationDto.codigo,
                creado_en: createVerificationDto.creadoEn,
                expiracion: createVerificationDto.expiracion,
            },
        });

        return {
            mensaje: '¡Código de verificación creado!',
        };
    }

    async getVerificationCode(correo: string) {
        return await this.prisma.verificacion.findFirst({
            where: { correo },
            orderBy: { creado_en: 'desc' },
        });
    }
}

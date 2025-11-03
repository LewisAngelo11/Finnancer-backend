import { Injectable } from '@nestjs/common';
import { CreateSubcategoriaDto } from './dto/create-subcategoria.dto';
import { UpdateSubcategoriaDto } from './dto/update-subcategoria.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SubcategoriasService {
    constructor(private prisma: PrismaService) {}

    // Método que crea una subcategoría
    async createSubcategory(idUsuario: number, createSubcategoriaDto: CreateSubcategoriaDto) {
        await this.prisma.subcategoria.create({
            data: {
                nombre: createSubcategoriaDto.nombre,
                tipo: createSubcategoriaDto.tipo,
                estatus: createSubcategoriaDto.estatus,
                flujo: createSubcategoriaDto.flujo,
                id_categoria: createSubcategoriaDto.idCategoria,
                mostrar_panel: createSubcategoriaDto.mostrarPanel,
                id_usuario: idUsuario
            },
        });

        return {
            mensaje: '¡Subcategoría creada exitósamente!',
        };
    }

    // Método que devuelve todas las subcategorias activas del usuario
    async getAllSubcategories(idUsuario: number) {
        return this.prisma.subcategoria.findMany({
            where: {
                id_usuario: idUsuario,
                estatus: 'activo'
            },
        });
    }

    // Método para actualizar los datos de la subcategoría
    async updateSubcategory(idUsuario: number, updateSubcategoriaDto: UpdateSubcategoriaDto) {
        await this.prisma.subcategoria.update({
            where: {
                id_usuario: idUsuario,
                id_subcategoria: updateSubcategoriaDto.idSubcategoria,
            },
            data: {
                nombre: updateSubcategoriaDto.nombre,
                tipo: updateSubcategoriaDto.tipo,
                flujo: updateSubcategoriaDto.flujo,
                mostrar_panel: updateSubcategoriaDto.mostrarPanel,
            },
        });

        return {
            mensaje: '¡Subcateogiría actualizada correctamente!',
        };
    }

    // Método que cambia el estatus de la subcategoría 
    async changeStatusSubcategory(idUsuario: number, updateSubcategoriaDto: UpdateSubcategoriaDto) {
        await this.prisma.subcategoria.update({
            where: {
                id_usuario: idUsuario,
                id_subcategoria: updateSubcategoriaDto.idSubcategoria,
            },
            data: {
                estatus: updateSubcategoriaDto.estatus,
            },
        });

        return {
            mensaje: updateSubcategoriaDto.estatus === 'baja'
            ? 'La subcategoría fue dada de baja.'
            : 'La subcategoría fue habilitada.'
        };
    }
}

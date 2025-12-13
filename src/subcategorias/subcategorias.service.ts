import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateSubcategoriaDto } from './dto/create-subcategoria.dto';
import { UpdateSubcategoriaDto } from './dto/update-subcategoria.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SubcategoriasService {
    constructor(private prisma: PrismaService) {}

    // Método que crea una subcategoría
    async createSubcategory(idUsuario: number, createSubcategoriaDto: CreateSubcategoriaDto) {
        // Obtener la categoría princiapl para heredar los atributos 'flujo' y 'tipo' a la subcategoría
        const categoriaPrincipal = await this.prisma.categoria.findUnique({
            where: {
                id_categoria: createSubcategoriaDto.idCategoria,
                id_usuario: idUsuario,
            }
        })

        // Verificar que la categoría principal fue encontrada
        if (!categoriaPrincipal) {
            throw new BadRequestException('La categoría principal no fue encontrada o no pertenece al usuario.');
        }
        
        const subcategoria = await this.prisma.subcategoria.create({
            data: {
                nombre: createSubcategoriaDto.nombre,
                tipo: categoriaPrincipal?.tipo, // Hereda el 'tipo' de la categoría prinicpal a la subcategoria
                estatus: createSubcategoriaDto.estatus,
                flujo: categoriaPrincipal?.flujo, // Hereda el 'flujo' de la categoría prinicpal a la subcategoria
                id_categoria: createSubcategoriaDto.idCategoria,
                mostrar_panel: createSubcategoriaDto.mostrarPanel,
                icono: createSubcategoriaDto.icono,
                id_usuario: idUsuario
            },
            include: {
                categoria: {
                    select: { nombre: true },
                },
            },
        });

        return {
            id_subcategoria: subcategoria.id_subcategoria,
            nombre: subcategoria.nombre,
            tipo: subcategoria.tipo,
            estatus: subcategoria.estatus,
            flujo: subcategoria.flujo,
            categoria: subcategoria.categoria?.nombre,
            mostrar_panel: subcategoria.mostrar_panel,
            id_usuario: subcategoria.id_usuario,
            icono: subcategoria.icono,
        }
    }

    // Método que devuelve todas las subcategorias activas del usuario
    async getAllSubcategories(idUsuario: number) {
        const subcategorias = await this.prisma.subcategoria.findMany({
            where: {
                id_usuario: idUsuario,
            },
            include: {
                categoria: {
                    select: {nombre: true},
                },
            },
        });

        return subcategorias.map(s => ({
            id_subcategoria: s.id_subcategoria,
            nombre: s.nombre,
            tipo: s.tipo,
            estatus: s.estatus,
            flujo: s.flujo,
            categoria: s.categoria?.nombre,
            mostrar_panel: s.mostrar_panel,
            id_usuario: s.id_usuario,
            icono: s.icono,
        }));
    }

    // Método que obtiene toas las subcategorías pertenecientes a una categoría
    async getSubcategoriesFromCategory(idCategoria: number) {
        const allSubcategories = await this.prisma.subcategoria.findMany({
            where: {
                id_categoria: idCategoria,
            },
        });

        return allSubcategories;
    }

    // Método para actualizar los datos de la subcategoría
    async updateSubcategory(idUsuario: number, updateSubcategoriaDto: UpdateSubcategoriaDto) {
        const subcategoria = await this.prisma.subcategoria.update({
            where: {
                id_usuario: idUsuario,
                id_subcategoria: updateSubcategoriaDto.idSubcategoria,
            },
            data: {
                nombre: updateSubcategoriaDto.nombre,
                icono: updateSubcategoriaDto.icono,
                mostrar_panel: updateSubcategoriaDto.mostrarPanel,
            },
        });

        return {
            mensaje: '¡Subcategoría actualizada correctamente!',
            subcategoria,
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

import { Injectable } from '@nestjs/common';
import { CreateSubcategoriaDto } from './dto/create-subcategoria.dto';
import { UpdateSubcategoriaDto } from './dto/update-subcategoria.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SubcategoriasService {
    constructor(private prisma: PrismaService) {}

    // Método que crea una subcategoría
    async createSubcategory(createSubcategoriaDto: CreateSubcategoriaDto) {
        await this.prisma.subcategoria.create({
            data: {
                nombre: createSubcategoriaDto.nombre,
                tipo: createSubcategoriaDto.tipo,
                estatus: createSubcategoriaDto.estatus,
                flujo: createSubcategoriaDto.flujo,
                id_categoria: createSubcategoriaDto.idCategoria
            },
        });

        return {
            mensaje: '¡Subcategoría creada exitósamente!',
        };
    }
}

import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriasService {
  // Categorías por defecto al crear una nuevo usuario, se les asignan esas categorías por defectos
  private categoriasDefault: CreateCategoriaDto[] = [
    {nombre: 'Ingresos de Ventas', tipo: 'ingreso', estatus: 'activo', flujo: 'efectivo', idUsuario: 0 },
    {nombre: 'Servicios Básicos', tipo: 'egreso', estatus: 'activo', flujo: 'efectivo', idUsuario: 0 },
    {nombre: 'Otros Ingresos', tipo: 'ingreso', estatus: 'activo', flujo: 'efectivo', idUsuario: 0 },
    {nombre: 'Otros Egresos', tipo: 'egreso', estatus: 'activo', flujo: 'efectivo', idUsuario: 0 },
  ];
  
  constructor(private prisma: PrismaService) {}

  // Método que crea las categorias por defecto a el usuario recíen registrado
  async createDefaultCategories(id: number) {
    // Crear una copia del array para agregar el id del usuairo que pertenecerán las categorías
    const categoriasUsuario = this.categoriasDefault.map(categoria => ({
      ...categoria,
      idUsuario: id
    }));

    // Crea las categoria por defecto del usuario en paralelo
    await Promise.all(
      categoriasUsuario.map(categoria => 
        this.prisma.categoria.create({
          data: {
            nombre: categoria.nombre,
            tipo: categoria.tipo,
            estatus: categoria.estatus,
            flujo: categoria.flujo,
            id_usuario: categoria.idUsuario,
          },
        }),
      ),
    );
  }

  // Método que obtiene todas las categorías del usuario que están activas y no de baja
  getAllCategories(id: number) {
    return this.prisma.categoria.findMany({
      where: {
        id_usuario: id,
        estatus: 'activo',
      },
    });
  }

  // Método que crea una categoría personalizada del usuario
  async createCategory(idUsuario: number, createCategoryDto: CreateCategoriaDto) {
    await this.prisma.categoria.create({
      data: {
        nombre: createCategoryDto.nombre,
        tipo: createCategoryDto.tipo,
        flujo: createCategoryDto.flujo,
        id_usuario: idUsuario,
      }
    });
    
    return {
      mensaje: '¡Categoría creada!',
    };
  }

  // Método que actualiza la categoría
  async updateCategory(idUsuario: number, updateCategoriaDto: UpdateCategoriaDto) {
    await this.prisma.categoria.update({
      where: {
        id_usuario: idUsuario,
        id_categoria: updateCategoriaDto.idCategoria,
      },
      data: {
        nombre: updateCategoriaDto.nombre,
        tipo: updateCategoriaDto.tipo,
        flujo: updateCategoriaDto.flujo,
      }
    });

    return {
      mensaje: '¡Categoría actualizada correctamente!',
    };
  }

  // Método que cambia el estatus de una categoría
  async changeEstatusCategory(idUsuario: number, updateCategoriaDto: UpdateCategoriaDto) {
    await this.prisma.categoria.update({
      where: {
        id_usuario: idUsuario,
        id_categoria: updateCategoriaDto.idCategoria
      },
      data: {
        estatus: updateCategoriaDto.estatus
      }
    });

    if (updateCategoriaDto.estatus === 'baja') {
      return {
        mensaje: 'La categoría fue dada de baja.',
      };
    }

    return {
      mensaje: 'La categoría se habilitó.',
    };
  }
}

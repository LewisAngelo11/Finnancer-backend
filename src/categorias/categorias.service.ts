import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { categoria } from 'generated/prisma';

@Injectable()
export class CategoriasService {
  // Categorías por defecto al crear una nuevo usuario, se les asignan esas categorías por defectos
  private categoriasDefault: CreateCategoriaDto[] = [
    { nombre: 'Ingresos de Ventas', tipo: 'ingreso', estatus: 'activo', flujo: 'efectivo', idUsuario: 0, mostrarPanel: true},
    { nombre: 'Servicios Básicos', tipo: 'egreso', estatus: 'activo', flujo: 'efectivo', idUsuario: 0, mostrarPanel: true},
    { nombre: 'Otros Ingresos', tipo: 'ingreso', estatus: 'activo', flujo: 'efectivo', idUsuario: 0, mostrarPanel: true},
    { nombre: 'Otros Egresos', tipo: 'egreso', estatus: 'activo', flujo: 'efectivo', idUsuario: 0, mostrarPanel: true},
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
            mostrar_panel: categoria.mostrarPanel
          },
        }),
      ),
    );
  }

  // Método que obtiene todas las categorías del usuario que están activas y no de baja
  async getAllCategories(id: number) {
    return await this.prisma.categoria.findMany({
      where: {
        id_usuario: id,
        estatus: 'activo',
      },
    });
  }

  // Método que consulta una categoría por su ID
  async getOneCategory(idCategoria: number) {
    const categoria = await this.prisma.categoria.findUnique({
      where: {
        id_categoria: idCategoria,
      },
    });

    return categoria;
  }

  // Método que crea una categoría personalizada del usuario
  async createCategory(idUsuario: number, createCategoryDto: CreateCategoriaDto) {
    await this.prisma.categoria.create({
      data: {
        nombre: createCategoryDto.nombre,
        tipo: createCategoryDto.tipo,
        flujo: createCategoryDto.flujo,
        id_usuario: idUsuario,
        mostrar_panel: createCategoryDto.mostrarPanel
      }
    });
    
    return {
      mensaje: '¡Categoría creada!',
    };
  }

  // Método que actualiza la categoría
  async updateCategory(idUsuario: number, updateCategoriaDto: UpdateCategoriaDto) {
    const categoria = await this.prisma.categoria.update({
      where: {
        id_usuario: idUsuario,
        id_categoria: updateCategoriaDto.idCategoria,
      },
      data: {
        nombre: updateCategoriaDto.nombre,
        tipo: updateCategoriaDto.tipo,
        flujo: updateCategoriaDto.flujo,
        mostrar_panel: updateCategoriaDto.mostrarPanel
      }
    });

    // Actualizo los atributos de 'flujo' y 'tipo' en las subcategorías pertenecientes a la categoría
    await Promise.all([
      this.changeFlujoSubcategory(updateCategoriaDto, categoria),
      this.changeTipoSubcategory(updateCategoriaDto, categoria),
    ]);

    return {
      mensaje: '¡Categoría actualizada correctamente!',
      categoria,
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

    return {
      mensaje: updateCategoriaDto.estatus === 'baja'
      ? 'La categoría fue dada de baja'
      : 'La categoría se habilitó'
    };
  }

  // Método que actualiza el 'flujo' de todas las subcategorías que pertenecen a la misma categoría
  async changeFlujoSubcategory(updateCategoriaDto: UpdateCategoriaDto, categoria: categoria) {
    if (updateCategoriaDto.flujo && updateCategoriaDto.flujo !== categoria.flujo) {
      await this.prisma.subcategoria.updateMany({
        where: {
          id_categoria: categoria.id_categoria,
        },
        data: {
          flujo: updateCategoriaDto.flujo,
        }
      });
    }
    return;
  }

  // Método que actualiza el 'tipo' de todas las subcategorías que pertecenen a la misma categoría
  async changeTipoSubcategory(updateCategoriaDto: UpdateCategoriaDto, categoria: categoria) {
    if (updateCategoriaDto.tipo && updateCategoriaDto.tipo !== categoria.tipo) {
      await this.prisma.subcategoria.updateMany({
        where: {
          id_categoria: categoria.id_categoria,
        },
        data: {
          tipo: updateCategoriaDto.tipo,
        }
      });
    }
    return;
  }
}

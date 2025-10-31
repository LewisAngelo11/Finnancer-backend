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
    // Crea cada categoria por defecto al mismo usuario
    for (let i = 0; i < this.categoriasDefault.length; i++) {
      // Asignar el id_usuario a la categoría
      this.categoriasDefault[i].idUsuario = id;

      await this.prisma.categoria.create({
        data: {
          nombre: this.categoriasDefault[i].nombre,
          tipo: this.categoriasDefault[i].tipo,
          estatus: this.categoriasDefault[i].estatus,
          flujo: this.categoriasDefault[i].flujo,
          id_usuario: this.categoriasDefault[i].idUsuario,
        },
      });
    }
  }

  // Método que obtiene todas las categorías del usuario
  getAllCategories(id: number) {
    return this.prisma.categoria.findMany({
      where: {
        id_usuario: id,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} categoria`;
  }

  update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    return `This action updates a #${id} categoria`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoria`;
  }
}

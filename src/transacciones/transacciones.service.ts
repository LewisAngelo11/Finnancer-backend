import { Injectable } from '@nestjs/common';
import { CreateTransaccioneDto } from './dto/create-transaccione.dto';
import { UpdateTransaccioneDto } from './dto/update-transaccione.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CategoriasService } from 'src/categorias/categorias.service';
import { estatus_transaccion } from 'generated/prisma';

export interface CuotasData {
  id_transaccion: number;
  monto: number;
  fecha_vencimiento: Date | null;
}

@Injectable()
export class TransaccionesService {
  constructor(private prisma: PrismaService, private categoria: CategoriasService) {}

  // Método que crea una nueva transaccion
  async createNewTransaction(idUsuario: number, idPerfil: number, createTransaccioneDto: CreateTransaccioneDto) {
    // Consultar la categoria a la que pertenece la transaccion y verificar que flujo de efectivo tiene
    let categoria = await this.categoria.getOneCategory(createTransaccioneDto.idCategoria);

    if (!categoria) {
      throw new Error('No se encontó la categoría');
    }

    const transaccion = await this.prisma.transaccion.create({
      data: {
        tipo: categoria?.tipo,
        nota: createTransaccioneDto.nota,
        monto_total: createTransaccioneDto.montoTotal,
        plazos: createTransaccioneDto.plazos,
        id_categoria: createTransaccioneDto.idCategoria,
        id_usuario: idUsuario,
        id_perfil: idPerfil,
        id_subcategoria: createTransaccioneDto.idSubcategoria,
        id_persona: createTransaccioneDto.idPersona,
      }
    });

    const plazos = createTransaccioneDto.plazos;
    const montoPorCuota = Number((createTransaccioneDto.montoTotal / plazos).toFixed(2));
    let cuotas: CuotasData[] = [];

    if (categoria?.flujo === 'cuenta_por_cobrar' || categoria?.flujo === 'cuenta_por_pagar') {
      // Crear un array vacío que para guardar las cuotas de la transacción con la longitud de 'plazos'
      cuotas = Array.from({ length: plazos }).map(() => ({
        id_transaccion: transaccion.id_transaccion,
        monto: montoPorCuota,
        fecha_vencimiento: null,
      }));

      // Creo las cuotas de transacciones con el array de cuotas
      await this.prisma.transaccion_cuota.createMany({ data: cuotas });
    }

    return {
      mensaje: '¡Transaccion creada correctamente!',
      transaccion,
      cuotas,
    }
  }

  // Método que obtiene todas las transacciones del usuario
  async getAllTransactions(idUsuaio: number) {
    const transacciones = await this.prisma.transaccion.findMany({
      where: {
        id_usuario: idUsuaio,
      },
      include: {
        categoria: {
          select: { nombre: true }
        },
        subcategoria: {
          select: { nombre: true }
        },
        persona: {
          select: { nombre: true }
        },
        perfil: {
          select: { nombre: true }
        }
    }
    });

    // Devuelve la respuesta mas limpia para el frontend
    return transacciones.map(t => ({
      id_transaccion: t.id_transaccion,
      tipo: t.tipo,
      fecha_transaccion: t.fecha_transaccion,
      nota: t.nota,
      monto_total: t.monto_total,
      plazos: t.plazos,
      estatus: t.estatus,
      categoria: t.categoria?.nombre || 'Sin categoría',
      subcategoria: t.subcategoria?.nombre || 'Sin Subcategoría',
      persona: t.persona?.nombre || 'Ninguno',
      perfil: t.perfil?.nombre || 'Ninguno',
    }));
  }

  // Método que obtienen todas las transaciones que son de ingresos
  async getIncomesTransactions(idUsuaio: number) {
    return await this.prisma.transaccion.findMany({
      where: {
        id_usuario: idUsuaio,
        tipo: 'ingreso',
      }
    });
  }

  // Método que obtienen tosas las transaciones que son de egresos
  async getExpensesTransactions(idUsuario: number) {
    return await this.prisma.transaccion.findMany({
      where: {
        id_usuario: idUsuario,
        tipo: 'egreso',
      }
    })
  }

  // Método para obtener una transaccion por su ID
  async getOneTransaction(idTransaccion: number) {
    return await this.prisma.transaccion.findUnique({
      where: {
        id_transaccion: idTransaccion,
      },
    });
  }

  // Método que cambia el estatus de la transacción a cancelada.
  async cancelTransaction(idUsuario: number, updateTransaccioneDto: UpdateTransaccioneDto) {
    const transaccion = await this.prisma.transaccion.update({
      where: {
        id_transaccion: updateTransaccioneDto.idTransaccion,
        id_usuario: idUsuario,
      },
      data: {
        estatus: 'cancelada',
      },
    });

    return {
      mensaje: 'La transacción ha sido cancelada',
      transaccion,
    };
  }

  // Método que cambia e estatus de la transaccion a pagada
  async changeStatusTransaction(idTransaccion: number, newEstatus: estatus_transaccion) {
    const transaccion = await this.prisma.transaccion.update({
      where: {
        id_transaccion: idTransaccion,
      },
      data: {
        estatus: newEstatus,
      },
    });

    return {
      mensaje: 'La transacción ha sido pagada.',
      transaccion,
    };
  }

  // Función que obtiene todo el monto de ingresos de las transacciones
  async getAllIncomesAmount(idUsuario: number) {
    const ingresosTotales = await this.prisma.transaccion.aggregate({
      where: {
        id_usuario: idUsuario,
        tipo: 'ingreso'
      },
      _sum: {
        monto_total: true,
      },
    });

    return ingresosTotales;
  }
}

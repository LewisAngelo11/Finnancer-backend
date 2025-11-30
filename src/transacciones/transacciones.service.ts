import { Injectable } from '@nestjs/common';
import { CreateTransaccioneDto } from './dto/create-transaccione.dto';
import { UpdateTransaccioneDto } from './dto/update-transaccione.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CategoriasService } from 'src/categorias/categorias.service';

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
  async getAllTransactions(idUsuario: number) {
    const transacciones = await this.prisma.transaccion.findMany({
      where: {
        id_usuario: idUsuario,
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
  async getIncomesTransactions(idUsuario: number) {
    return await this.prisma.transaccion.findMany({
      where: {
        id_usuario: idUsuario,
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
      include: {
        categoria: {
          select: { flujo: true },
        },
      },
    });
  }

  // Método que obtiene las últimas 10 transacciones mas recientes
  async getLastTransactions(idUsuario: number) {
    const lastTransactions = await this.prisma.transaccion.findMany({
      where: {
        id_usuario: idUsuario,
      },
      orderBy: {
        fecha_transaccion: 'desc',
      },
      take: 10,
      include: {
        categoria: {
          select: {icono: true, nombre: true},
        },
      }
    });

    // Retornar las transacciones mas limpias
    return lastTransactions.map(t => ({
      id_transaccion: t.id_transaccion,
      tipo: t.tipo,
      fecha_transaccion: t.fecha_transaccion,
      nota: t.nota,
      monto_total: t.monto_total,
      plazos: t.plazos,
      estatus: t.estatus,
      categoria: t.categoria?.nombre || '',
      icono_categoria: t.categoria?.icono || '',
      id_persona: t.id_persona,
      perfil: t.id_perfil,
    }));
  }

  // Método que cambia el estatus de la transacción a cancelada.
  async cancelTransaction(idUsuario: number, updateTransaccioneDto: UpdateTransaccioneDto) {
    const transaccion = await this.prisma.transaccion.update({
      where: {
        id_transaccion: Number(updateTransaccioneDto.idTransaccion),
        id_usuario: Number(idUsuario),
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
  async changeStatusTransaction(idTransaccion: number) {
    const transaccion = await this.prisma.transaccion.update({
      where: {
        id_transaccion: Number(idTransaccion),
      },
      data: {
        estatus: 'pagada',
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

  // Función que obtiene todo el monto de egresos de las transacciones
  async getAllEspensesAmount(idUsuario: number) {
    const egresosTotales = await this.prisma.transaccion.aggregate({
      where: {
        id_usuario: idUsuario,
        tipo: 'egreso'
      },
      _sum: {
        monto_total: true,
      },
    });

    return egresosTotales;
  }

  // Función que actualiza ua transacción (Por lo pronto, actualiza únicamente la nota)
  async updateTransaction(updateTransaccioneDto: UpdateTransaccioneDto) {
    const idTransaccion = updateTransaccioneDto.idTransaccion;

    const transaccionUpdate = await this.prisma.transaccion.update({
      where: {
        id_transaccion: idTransaccion,
      },
      data: {
        nota: updateTransaccioneDto.nota,
      },
    });

    return transaccionUpdate;
  }

  // Método que obtiene todas las transacciones hechas por un perfil
  async getAllTransactionsFromProfile(idUsuario: number, idPerfil: number) {
    const transaction = await this.prisma.transaccion.findMany({
      where: {
        id_usuario: idUsuario,
        id_perfil: idPerfil,
      },
      include: {
        categoria: {
          select: {icono: true, nombre: true},
        },
      },
    });
    
    return transaction;
  }

  // MÉTODOS PARA EL DASHOARD
  // Método que obtiene el total del mes de una subcategoría
  async getTotalAndSumCategory(idUsuario: number, idCategoria: number) {
    const now = new Date();
    const inicioMes = new Date(now.getFullYear(), now.getMonth(), 1);
    const finMes = new Date(now.getFullYear(), now.getMonth() + 1, 0);

    // Suma de todas las transacciones de la categoría
    const sum = await this.prisma.transaccion.aggregate({
      where: {
        id_usuario: idUsuario,
        id_categoria: idCategoria,
        fecha_transaccion: {
          gte: inicioMes,
          lte: finMes,
        }
      },
      _sum: {
        monto_total: true
      }
    });

    // Listado de todas las transacciones de la categoría
    const data = await this.prisma.transaccion.findMany({
      where: {
        id_usuario: idUsuario,
        id_categoria: idCategoria,
        fecha_transaccion: {
          gte: inicioMes,
          lte: finMes,
        }
      },
      include: {
        categoria: { select: { icono: true, nombre: true, mostrar_panel: true }}
      }
    });

    return {
      total: sum._sum.monto_total ?? 0,
      transacciones: data
    };
  }
}

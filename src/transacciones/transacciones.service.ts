import { Injectable } from '@nestjs/common';
import { CreateTransaccioneDto } from './dto/create-transaccione.dto';
import { UpdateTransaccioneDto } from './dto/update-transaccione.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TransaccionesService {
  constructor(private prisma: PrismaService) {}

  // Método que crea una nueva transaccion
  async createNewTransaction(idUsuario: number, createTransaccioneDto: CreateTransaccioneDto) {
    const transaccion = await this.prisma.transaccion.create({
      data: {
        tipo: createTransaccioneDto.tipoMovimiento,
        nota: createTransaccioneDto.nota,
        monto_total: createTransaccioneDto.montoTotal,
        plazos: createTransaccioneDto.plazos,
        id_categoria: createTransaccioneDto.idCategoria,
        id_usuario: idUsuario,
        id_perfil: createTransaccioneDto.idPerfil,
        id_subcategoria: createTransaccioneDto.idSubcategoria,
        id_persona: createTransaccioneDto.idPersona,
      }
    });
    
    return {
      mensaje: '¡Transaccion creada correctamente!',
      transaccion,
    }
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
}

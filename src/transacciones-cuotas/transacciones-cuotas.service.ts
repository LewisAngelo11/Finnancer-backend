import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UpdateTransaccionesCuotaDto } from './dto/update-transacciones-cuota.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { estatus_transaccion } from 'generated/prisma';
import { Decimal } from 'generated/prisma/runtime/library';
import { TransaccionesService } from 'src/transacciones/transacciones.service';

@Injectable()
export class TransaccionesCuotasService {
  constructor(private prisma: PrismaService, private transacciones: TransaccionesService) {}

  // Método que es para los pagos de las cuotas de una transacción
  async paymentTransactionFee(cuotaPago: UpdateTransaccionesCuotaDto) {
    // Obtener la cuota a abonar
    const cuota = await this.prisma.transaccion_cuota.findUnique({
      where: {
        id_cuota: cuotaPago.idCuota,
      },
    });

    if (!cuota) throw new NotFoundException('No se encontró la cuota a pagar.');
    
    // Saca el restante a pagar restando lo ya pagado a el monto
    const restante = cuota.monto.sub(cuota.pagado);
    // Valida si el pago que ingresó el usuario excede el restante
    if (new Decimal(cuotaPago.pago).greaterThan(restante)) {
      throw new BadRequestException('El pago excede el monto pendiente de esta cuota.');
    }

    // Sumarle a lo pagado de la cuota, el nuevo pago hecho por el usuario
    const nuevoPagado = cuota.pagado.add(cuotaPago.pago);

    let estatusCuota: estatus_transaccion = 'pendiente';
    let fechaPago: Date | null = null;

    // Verificar si el total pagado es igual al monto, para cambiar el estatus a pagada y crear la fecha de pago
    if (nuevoPagado.equals(cuota.monto)) {
      estatusCuota = 'pagada';
      fechaPago = new Date();
    }

    // Actualiza la cuota pagada
    const cuotaPagada = await this.prisma.transaccion_cuota.update({
      where: {
        id_cuota: cuotaPago.idCuota
      },
      data: {
        pagado: nuevoPagado,
        estatus: estatusCuota,
        fecha_pago: fechaPago,
      },
    });
    
    // Validar si ya se pagaron todas las cuotas para cambiar el estatus de la transacción
    await this.validatePaymentsFee(cuotaPago.idTransaccion);

    return {
      mensaje: 'Se realizó el pago correctamente.',
      cuotaPagada,
    }
  }

  // Método que verifica si la suma de los pagos de las cuotas es igual a el monto total de la transaccion
  async validatePaymentsFee(idTransaccion: number) {
    const cuotasTransaccion = await this.prisma.transaccion_cuota.findMany({
      where : {
        id_transaccion: idTransaccion
      },
    });

    // Suma todos los valores de pagado de cada cuota
    const sumaMontosCuotas = cuotasTransaccion.reduce((acumulador, cuota) => acumulador.add(cuota.pagado), new Decimal(0));

    // Obtener la transaccion a la que pertenecen las cuotas
    const transaccion = await this.transacciones.getOneTransaction(idTransaccion);

    if (!transaccion) throw new BadRequestException('No se encontró la transacción.');

    // Verificar si la suma de los pagos de todas las cuotas equivalen al monto total de la transaccion
    if (sumaMontosCuotas.equals(transaccion.monto_total)) {
      // Cambia el estatus a pagada si se cumple
      const cambioEstatusTransaccion = await this.transacciones.changeStatusTransaction(idTransaccion);
      return cambioEstatusTransaccion;
    }

    // Calcula el restante de lo que se debe en la transacción
    const restante = transaccion.monto_total.sub(sumaMontosCuotas);

    return {
      mensaje: `Restante a pagar: ${restante}`,
    };
  }

  // Método que obtiene todas las cuotas de una transaccion
  async getAllFeesOfTransaction(idTransaccion: number) {
    const transaccionesCuotas = await this.prisma.transaccion_cuota.findMany({
      where: {
        id_transaccion: idTransaccion 
      },
      orderBy: {
        id_cuota: 'asc',
      },
    });

    return transaccionesCuotas;
  }

  // Método que actualiza la fecha de vencimiento de la cuota
  async updateExpirationDate(body: UpdateTransaccionesCuotaDto) {
    const idCuota = body.idCuota;

    if (!idCuota) throw new BadRequestException('No se encontró la cuota.');

    await this.prisma.transaccion_cuota.update({
      where: {
        id_cuota: idCuota,
      },
      data: {
        fecha_vencimiento: body.fechaVencimiento,
      },
    });

    return {
      mensaje: '¡Fecha de vencimiento agregada!',
    };
  }
}

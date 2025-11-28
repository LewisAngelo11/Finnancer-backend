import { Controller, Get, Body, Patch, Param, ParseIntPipe } from '@nestjs/common';
import { TransaccionesCuotasService } from './transacciones-cuotas.service';
import { UpdateTransaccionesCuotaDto } from './dto/update-transacciones-cuota.dto';

@Controller('transacciones-cuotas')
export class TransaccionesCuotasController {
  constructor(private readonly transaccionesCuotasService: TransaccionesCuotasService) {}

  @Patch('payment')
  paymentTransactionFee(@Body() body: UpdateTransaccionesCuotaDto) {
    return this.transaccionesCuotasService.paymentTransactionFee(body);
  }

  @Patch('verify-payment')
  validatePaymentsFee(@Body() body: UpdateTransaccionesCuotaDto) {
    const idTransaccion = body.idTransaccion;
    return this.transaccionesCuotasService.validatePaymentsFee(idTransaccion);
  }

  @Get(':idTransaction')
  getAllFeesOfTransaction(@Param('idTransaction', ParseIntPipe) idTransaction: number) {
    return this.transaccionesCuotasService.getAllFeesOfTransaction(idTransaction);
  }

  @Patch('updateExpiration')
  updateExpirationDate(@Body() body: UpdateTransaccionesCuotaDto) {
    return this.transaccionesCuotasService.updateExpirationDate(body);
  }
}

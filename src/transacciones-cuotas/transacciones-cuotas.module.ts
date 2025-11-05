import { Module } from '@nestjs/common';
import { TransaccionesCuotasService } from './transacciones-cuotas.service';
import { TransaccionesCuotasController } from './transacciones-cuotas.controller';

@Module({
  controllers: [TransaccionesCuotasController],
  providers: [TransaccionesCuotasService],
})
export class TransaccionesCuotasModule {}

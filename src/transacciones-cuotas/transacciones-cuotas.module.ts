import { Module } from '@nestjs/common';
import { TransaccionesCuotasService } from './transacciones-cuotas.service';
import { TransaccionesCuotasController } from './transacciones-cuotas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TransaccionesModule } from 'src/transacciones/transacciones.module';

@Module({
  imports: [PrismaModule, TransaccionesModule],
  controllers: [TransaccionesCuotasController],
  providers: [TransaccionesCuotasService],
})
export class TransaccionesCuotasModule {}

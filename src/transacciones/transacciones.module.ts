import { Module } from '@nestjs/common';
import { TransaccionesService } from './transacciones.service';
import { TransaccionesController } from './transacciones.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CategoriasModule } from 'src/categorias/categorias.module';

@Module({
  imports: [PrismaModule, CategoriasModule],
  controllers: [TransaccionesController],
  providers: [TransaccionesService],
  exports: [TransaccionesService],
})
export class TransaccionesModule {}

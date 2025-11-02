import { Module } from '@nestjs/common';
import { SubcategoriasService } from './subcategorias.service';
import { SubcategoriasController } from './subcategorias.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SubcategoriasController],
  providers: [SubcategoriasService],
})
export class SubcategoriasModule {}

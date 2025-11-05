import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransaccionesCuotasService } from './transacciones-cuotas.service';
import { CreateTransaccionesCuotaDto } from './dto/create-transacciones-cuota.dto';
import { UpdateTransaccionesCuotaDto } from './dto/update-transacciones-cuota.dto';

@Controller('transacciones-cuotas')
export class TransaccionesCuotasController {
  constructor(private readonly transaccionesCuotasService: TransaccionesCuotasService) {}

  @Post()
  create(@Body() createTransaccionesCuotaDto: CreateTransaccionesCuotaDto) {
    return this.transaccionesCuotasService.create(createTransaccionesCuotaDto);
  }

  @Get()
  findAll() {
    return this.transaccionesCuotasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transaccionesCuotasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransaccionesCuotaDto: UpdateTransaccionesCuotaDto) {
    return this.transaccionesCuotasService.update(+id, updateTransaccionesCuotaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transaccionesCuotasService.remove(+id);
  }
}

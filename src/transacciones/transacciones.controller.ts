import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { TransaccionesService } from './transacciones.service';
import { CreateTransaccioneDto } from './dto/create-transaccione.dto';
import { UpdateTransaccioneDto } from './dto/update-transaccione.dto';

@Controller('transacciones')
export class TransaccionesController {
  constructor(private readonly transaccionesService: TransaccionesService) {}

  @Post('create')
  createNewTransaction(@Req() req: any, @Body() body: CreateTransaccioneDto) {
    const idUsuario = req.usuario.sub;
    return this.transaccionesService.createNewTransaction(idUsuario, body);
  }
}

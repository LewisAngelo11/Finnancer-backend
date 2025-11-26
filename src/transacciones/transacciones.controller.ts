import { Controller, Get, Post, Body, Patch, Param, Delete, Req, ParseIntPipe } from '@nestjs/common';
import { TransaccionesService } from './transacciones.service';
import { CreateTransaccioneDto } from './dto/create-transaccione.dto';
import { UpdateTransaccioneDto } from './dto/update-transaccione.dto';

@Controller('transacciones')
export class TransaccionesController {
  constructor(private readonly transaccionesService: TransaccionesService) {}

  @Post('create')
  createNewTransaction(@Req() req: any, @Body() body: CreateTransaccioneDto) {
    const idUsuario = req.usuario.sub;
    const idPerfil = Number(req.headers['x-perfil-id']);
    return this.transaccionesService.createNewTransaction(idUsuario, idPerfil, body);
  }

  @Get('all')
  getAllTransactions(@Req() req: any) {
    const idUsuario = req.usuario.sub;
    return this.transaccionesService.getAllTransactions(idUsuario);
  }

  @Get('last-transactions')
  getLastTransactions(@Req() req: any) {
    const idUsuario = req.usuario.sub;
    return this.transaccionesService.getLastTransactions(idUsuario);
  }

  @Get(':idTransaction')
  getOneTransaction(@Param('idTransaction', ParseIntPipe) idTransaction: number) {
    return this.transaccionesService.getOneTransaction(idTransaction);
  }

  @Get('amount/incomes')
  getAllIncomesAmount(@Req() req: any) {
    const idUsuario = req.usuario.sub;
    return this.transaccionesService.getAllIncomesAmount(idUsuario);
  }

  @Get('amount/espenses')
  getAllEspensesAmount(@Req() req: any) {
    const idUsuario = req.usuario.sub;
    return this.transaccionesService.getAllEspensesAmount(idUsuario);
  }
  
  @Get('incomes')
  getIncomesTransaction(@Req() req: any) {
    const idUsuario = req.usuario.sub;
    return this.transaccionesService.getIncomesTransactions(idUsuario);
  }
  
  @Get('expenses')
  getExpensesTransaction(@Req() req: any) {
    const idUsuario = req.usuario.sub;
    return this.transaccionesService.getExpensesTransactions(idUsuario);
  }

  @Patch('cancel')
  cancelTransaction(@Req() req: any, @Body() body: UpdateTransaccioneDto) {
    const idUsuario = req.usuario.sub;
    return this.transaccionesService.cancelTransaction(idUsuario, body);
  }

  @Patch('update')
  updateTransaction(@Body() body: UpdateTransaccioneDto) {
    return this.transaccionesService.updateTransaction(body);
  }
}

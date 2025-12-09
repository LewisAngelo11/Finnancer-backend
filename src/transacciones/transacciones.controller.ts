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

    @Get('expenses')
    getExpensesTransaction(@Req() req: any) {
      const idUsuario = Number(req.usuario.sub);
      return this.transaccionesService.getExpensesTransactions(idUsuario);
    }
    
    @Get('last-transactions')
    getLastTransactions(@Req() req: any) {
      const idUsuario = req.usuario.sub;
      return this.transaccionesService.getLastTransactions(idUsuario);
    }

    @Get('all-profile')
    getAllTransactionsFromProfile(@Req() req: any) {
      const idUsuario = Number(req.usuario.sub);
      const idPerfil = Number(req.headers['x-perfil-id']);
      return this.transaccionesService.getAllTransactionsFromProfile(idUsuario, idPerfil);
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

    @Get('current-incomes')
    getIncomesTransactionsCurrent(@Req() req: any) {
      const idUsuario = req.usuario.sub;
      return this.transaccionesService.getIncomesTransactionsCurrent(idUsuario);
    }

    @Get('current-expenses')
    getExpensesTransactionsCurrent(@Req() req: any) {
      const idUsuario = req.usuario.sub;
      return this.transaccionesService.getExpensesTransactionsCurrent(idUsuario);
    }
    
    @Get('incomes')
    getIncomesTransaction(@Req() req: any) {
      const idUsuario = req.usuario.sub;
      return this.transaccionesService.getIncomesTransactions(idUsuario);
    }

    @Patch('cancel')
    cancelTransaction(@Req() req: any, @Body() body: UpdateTransaccioneDto) {
      const idUsuario = req.usuario.sub;
      return this.transaccionesService.cancelTransaction(idUsuario, body);
    }

    @Patch('complete')
    changeStatusTransaction(@Body() body: UpdateTransaccioneDto) {
      const idTransaccion = body.idTransaccion;
      return this.transaccionesService.changeStatusTransaction(idTransaccion);
    }

    @Patch('update')
    updateTransaction(@Body() body: UpdateTransaccioneDto) {
      return this.transaccionesService.updateTransaction(body);
    }

    @Get(':idTransaction')
    getOneTransaction(@Req() req: any, @Param('idTransaction', ParseIntPipe) idTransaction: number) {
      const idUsuario = req.usuario.sub;
      return this.transaccionesService.getOneTransaction(idUsuario, idTransaction);
    }

    @Get('total-cat/:idCategoria')
    getTotalAndSumCategory(@Req() req: any, @Param('idCategoria', ParseIntPipe) idCategoria: number) {
      const idUsuario = req.usuario.sub;
      return this.transaccionesService.getTotalAndSumCategory(idUsuario, idCategoria);
    }

    @Get('balance/:anio/:mes')
    generateBalance(@Req() req: any, @Param('anio', ParseIntPipe) anio: number, @Param('mes', ParseIntPipe) mes: number) {
      const idUsuario = req.usuario.sub;
      return this.transaccionesService.generateBalance(idUsuario, mes, anio);
    }
  }

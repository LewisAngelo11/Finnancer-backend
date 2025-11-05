import { Injectable } from '@nestjs/common';
import { CreateTransaccionesCuotaDto } from './dto/create-transacciones-cuota.dto';
import { UpdateTransaccionesCuotaDto } from './dto/update-transacciones-cuota.dto';

@Injectable()
export class TransaccionesCuotasService {
  create(createTransaccionesCuotaDto: CreateTransaccionesCuotaDto) {
    return 'This action adds a new transaccionesCuota';
  }

  findAll() {
    return `This action returns all transaccionesCuotas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transaccionesCuota`;
  }

  update(id: number, updateTransaccionesCuotaDto: UpdateTransaccionesCuotaDto) {
    return `This action updates a #${id} transaccionesCuota`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaccionesCuota`;
  }
}

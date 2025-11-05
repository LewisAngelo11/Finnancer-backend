import { PartialType } from '@nestjs/mapped-types';
import { CreateTransaccioneDto } from './create-transaccione.dto';
import { IsNumber } from 'class-validator';

export class UpdateTransaccioneDto extends PartialType(CreateTransaccioneDto) {
    @IsNumber()
    idTransaccion: number;
}

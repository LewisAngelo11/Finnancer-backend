import { PartialType } from '@nestjs/mapped-types';
import { CreateTransaccionesCuotaDto } from './create-transacciones-cuota.dto';
import { IsNumber, IsString, IsDate, IsEnum } from 'class-validator';

export class UpdateTransaccionesCuotaDto extends PartialType(CreateTransaccionesCuotaDto) {
    @IsNumber()
    idTransaccion: number;

    @IsNumber()
    idCuota: number;

    @IsNumber()
    pago: number;
}

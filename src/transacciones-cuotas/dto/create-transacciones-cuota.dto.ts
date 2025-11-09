import { IsNumber, IsString, IsDate, IsEnum } from 'class-validator';
import { estatus } from 'generated/prisma';

export class CreateTransaccionesCuotaDto {
    @IsNumber()
    monto: number;

    @IsDate()
    fechaVencimiento: Date;

    @IsEnum(estatus)
    estatus: estatus;

    @IsNumber()
    pagado: number
}

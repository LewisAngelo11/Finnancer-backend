import { IsNumber, IsString, IsEnum } from 'class-validator';
import { tipo_movimiento, estatus, flujo_efectivo } from 'generated/prisma';

export class CreateCategoriaDto {
    @IsString()
    nombre: string;

    @IsEnum(tipo_movimiento)
    tipo: tipo_movimiento;

    @IsEnum(estatus)
    estatus: estatus;

    @IsEnum(flujo_efectivo)
    flujo: flujo_efectivo;

    @IsNumber()
    idUsuario: number;
}

import { IsNumber, IsString, IsEnum, IsBoolean } from 'class-validator';
import { tipo_movimiento, estatus, flujo_efectivo } from 'generated/prisma';

export class CreateSubcategoriaDto {
    @IsString()
    nombre: string;

    @IsEnum(tipo_movimiento)
    tipo: tipo_movimiento;

    @IsEnum(estatus)
    estatus: estatus;

    @IsEnum(flujo_efectivo)
    flujo: flujo_efectivo;

    @IsNumber()
    idCategoria: number;

    @IsBoolean()
    mostrarPanel: boolean;
}

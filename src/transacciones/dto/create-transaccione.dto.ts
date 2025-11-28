import { IsNumber, IsString, IsDate, IsEnum } from 'class-validator';
import { tipo_movimiento, estatus_transaccion } from 'generated/prisma';

export class CreateTransaccioneDto {
    @IsEnum(tipo_movimiento)
    tipoMovimiento: tipo_movimiento;

    @IsDate()
    fechaTransaccion: Date;

    @IsString()
    nota: string;

    @IsNumber()
    montoTotal: number;

    @IsNumber()
    plazos: number;

    @IsEnum(estatus_transaccion)
    estatus: estatus_transaccion;

    @IsNumber()
    idCategoria: number;

    @IsNumber()
    idUsuario: number;

    @IsNumber()
    idPerfil: number;

    @IsNumber()
    idSubcategoria: number;

    @IsNumber()
    idPersona: number;
}

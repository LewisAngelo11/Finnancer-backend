import { IsNumber, IsString, IsEnum, IsBoolean } from 'class-validator';
import { tipo_movimiento, estatus, flujo_efectivo } from 'generated/prisma';

export class CreateSubcategoriaDto {
    @IsString()
    nombre: string;

    @IsEnum(estatus)
    estatus: estatus;
    
    @IsNumber()
    idCategoria: number;

    @IsBoolean()
    mostrarPanel: boolean;
}

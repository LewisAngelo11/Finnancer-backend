import { IsNumber, IsString, IsEnum, IsBoolean } from 'class-validator';
import { estatus } from 'generated/prisma';

export class CreateSubcategoriaDto {
    @IsString()
    nombre: string;

    @IsEnum(estatus)
    estatus: estatus;
    
    @IsNumber()
    idCategoria: number;

    @IsBoolean()
    mostrarPanel: boolean;

    @IsNumber()
    icono: number;
}

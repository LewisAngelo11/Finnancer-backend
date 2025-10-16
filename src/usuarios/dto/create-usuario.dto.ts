import { estatus } from "generated/prisma";
import { IsNumber, IsString, IsEnum, IsDate } from 'class-validator';


export class CreateUsuarioDto {
    @IsString()
    nombre: string;

    @IsString()
    apellidoP: string;

    @IsString()
    apellidoM: string;

    @IsString()
    correo: string;

    @IsString()
    contrasena: string;

    @IsDate()
    fechaCreacion: Date;

    @IsString()
    fotoPerfil: string;
    
    @IsEnum(estatus)
    estatus: estatus;

    @IsNumber()
    presupuesto: number;

    @IsNumber()
    ingresoMinimos: number;

    @IsNumber()
    egresoMaximos: number;

    @IsNumber()
    ahorroMensual: number;
}

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
}

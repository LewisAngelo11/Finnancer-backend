import { IsNumber, IsString, IsDate } from 'class-validator';


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

    // Este atributo es el codigo de verificación necesario para crear la cuenta
    @IsNumber()
    codigoVerificacion: number;
}

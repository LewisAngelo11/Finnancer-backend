import { IsNumber, IsString, IsDate } from 'class-validator';

export class CreateVerificationDto {
    @IsString()
    nombre: string;

    @IsString()
    correo: string;

    @IsNumber()
    codigo: number;

    @IsDate()
    creadoEn: Date;

    @IsDate()
    expiracion: Date;
}
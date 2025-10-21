import { IsString } from 'class-validator';

export class AuthDto {
    @IsString()
    correo: string;

    @IsString()
    contrasena: string;
}
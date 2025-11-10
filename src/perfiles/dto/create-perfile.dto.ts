import { IsNumber, IsString } from 'class-validator';

export class CreatePerfileDto {
    @IsString()
    nombre: string;

    @IsNumber()
    icono: number;

    @IsString()
    pin: string;
}

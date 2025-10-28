import { IsNumber, IsString, IsDate } from 'class-validator';

export class CreatePerfileDto {
    @IsString()
    nombre: string;

    @IsNumber()
    icono: number;

    @IsDate()
    fechaCreacion: Date;
}

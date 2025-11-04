import { IsString, IsEnum } from 'class-validator';
import { tipo_persona, estatus } from 'generated/prisma';

export class CreatePersonaDto {
    @IsString()
    nombre: string;

    @IsEnum(tipo_persona)
    tipoPersona: tipo_persona;

    @IsEnum(estatus)
    estatus: estatus;
}

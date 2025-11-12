import { PartialType } from '@nestjs/mapped-types';
import { CreatePerfileDto } from './create-perfile.dto';
import { IsNumber, IsEnum } from 'class-validator';
import { estatus } from 'generated/prisma';

export class UpdatePerfileDto extends PartialType(CreatePerfileDto) {
    @IsNumber()
    idPerfil: number;

    @IsEnum(estatus)
    estatus: estatus;
}

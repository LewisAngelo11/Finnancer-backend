import { PartialType } from '@nestjs/mapped-types';
import { CreatePerfileDto } from './create-perfile.dto';
import { IsNumber } from 'class-validator';

export class UpdatePerfileDto extends PartialType(CreatePerfileDto) {
    @IsNumber()
    idPerfil: number;
}

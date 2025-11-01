import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriaDto } from './create-categoria.dto';
import { IsNumber } from 'class-validator';

export class UpdateCategoriaDto extends PartialType(CreateCategoriaDto) {
    @IsNumber()
    idCategoria: number;
}

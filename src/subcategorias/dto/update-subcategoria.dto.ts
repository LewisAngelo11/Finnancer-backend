import { PartialType } from '@nestjs/mapped-types';
import { CreateSubcategoriaDto } from './create-subcategoria.dto';
import { IsNumber } from 'class-validator';

export class UpdateSubcategoriaDto extends PartialType(CreateSubcategoriaDto) {
    @IsNumber()
    idSubcategoria: number;
}

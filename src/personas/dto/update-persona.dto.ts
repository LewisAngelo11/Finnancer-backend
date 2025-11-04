import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonaDto } from './create-persona.dto';
import { IsNumber } from 'class-validator';

export class UpdatePersonaDto extends PartialType(CreatePersonaDto) {
    @IsNumber()
    idPersona: number;
}

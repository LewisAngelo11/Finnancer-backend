import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';
import { IsNumber } from 'class-validator';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
  @IsNumber()
  presupuesto: number;
  
  @IsNumber()
  ingresos: number;
  
  @IsNumber()
  egresos: number;
  
  @IsNumber()
  ahorroMensual: number;

  @IsNumber()
  diaCorte: number;
}

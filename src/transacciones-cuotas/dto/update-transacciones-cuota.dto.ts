import { PartialType } from '@nestjs/mapped-types';
import { CreateTransaccionesCuotaDto } from './create-transacciones-cuota.dto';

export class UpdateTransaccionesCuotaDto extends PartialType(CreateTransaccionesCuotaDto) {}

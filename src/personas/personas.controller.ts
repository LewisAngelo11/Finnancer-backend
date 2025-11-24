import { Controller, Get, Post, Body, Patch, Req } from '@nestjs/common';
import { PersonasService } from './personas.service';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';

@Controller('personas')
export class PersonasController {
  constructor(private readonly personasService: PersonasService) {}

  @Post('create')
  create(@Req() req: any, @Body() body: CreatePersonaDto) {
    const idUsuario = req.usuario.sub;
    return this.personasService.createPerson(idUsuario ,body);
  }

  @Get('all')
  getAll(@Req() req: any) {
    const idUsuario = req.usuario.sub;
    return this.personasService.getAllPersons(idUsuario);
  }

  @Get('clients')
  getAllClients(@Req() req: any) {
    const idUsuario = req.usuario.sub;
    return this.personasService.getClients(idUsuario);
  }

  @Get('providers')
  getAllProviders(@Req() req: any) {
    const idUsuario = req.usuario.sub;
    return this.personasService.getProviders(idUsuario);
  }

  @Patch('update')
  updatePerson(@Req() req: any, @Body() body: UpdatePersonaDto) {
    const idUsuario = req.usuario.sub;
    return this.personasService.updatePerson(idUsuario, body);
  }

  @Post('debt')
  getAllDebt(@Body() body: UpdatePersonaDto) {
    const idPersona = body.idPersona;
    return this.personasService.getAllDebt(idPersona);
  }

  @Patch('status')
  changeStatusPerson(@Req() req: any, @Body() body: UpdatePersonaDto) {
    const idUsuario = req.usuario.sub;
    return this.personasService.changeStatusPerson(idUsuario, body);
  }
}

import { Controller, Get, Post, Body, Patch, Req } from '@nestjs/common';
import { PerfilesService } from './perfiles.service';
import { CreatePerfileDto } from './dto/create-perfile.dto';
import { UpdatePerfileDto } from './dto/update-perfile.dto';

@Controller('perfiles')
export class PerfilesController {
  constructor(private readonly perfilesService: PerfilesService) {}

  @Post('create')
  createProfile(@Req() req: any, @Body() body: CreatePerfileDto){
    const idUsuario = req.usuario.sub;
    return this.perfilesService.createProfile(idUsuario, body);
  }

  @Post('create-admin')
  createAdminProfile(@Req() req: any) {
    const idUsuario = req.usuario.sub;
    return this.perfilesService.createAdminProfile(idUsuario);
  }

  @Get('all')
  getAllProfiles(@Req() req: any) {
    const idUsuario = req.usuario.sub;
    return this.perfilesService.getAllProfiles(idUsuario);
  }

  @Get('all-active')
  getAllActiveProfiles(@Req() req: any) {
    const idUsuario = req.usuario.sub;
    return this.perfilesService.getAllActiveProfiles(idUsuario);
  }

  @Get('one')
  getOneProfile(@Req() req: any) {
    const idPerfil = Number(req.headers['x-perfil-id']); // Acceder al id del perfil en el header de la request
    return this.perfilesService.getOneProfile(idPerfil);
  }

  @Patch('update')
  updateProfile(@Req() req: any, @Body() body: UpdatePerfileDto) {
    const idUsuario = req.usuario.sub;
    const idPerfil = body.idPerfil;
    return this.perfilesService.updateProfile(idUsuario, idPerfil, body);
  }

  @Post('validatePIN')
  validatePinProfile(@Body() body: UpdatePerfileDto) {
    return this.perfilesService.validatePinProfile(body);
  }
}

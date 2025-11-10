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

  @Patch('disable')
  disableProfiles(@Body() body: UpdatePerfileDto) {
    return this.perfilesService.disableProfile(body);
  }

  @Patch('enable')
  enableProfiles(@Body() body: UpdatePerfileDto) {
    return this.perfilesService.enableProfile(body);
  }
}

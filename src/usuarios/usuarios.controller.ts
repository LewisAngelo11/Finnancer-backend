import { Controller, Get, Body, Patch, Param, Req } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}
  
  @Patch('info')
  updateInfo(@Req() req: any, @Body() body: any) {
    const correo = req.usuario.mail; // Obtener el correo de la request
    return this.usuariosService.updateInfo(correo, body);
  }

  @Patch('update')
  updateFinance(@Req() req: any, @Body() body: any) {
    const correo = req.usuario.mail;
    return this.usuariosService.createFinanceParams(correo, body);
  }

  @Patch(':correo')
  update(@Param('correo') correo: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.createFinanceParams(correo, updateUsuarioDto);
  }

  @Get('me')
  getProfile(@Req() req: any) {
    const user = req.usuario; // viene del AuthGuard global
    return this.usuariosService.getInfoUsuario(user.mail);
  }
}

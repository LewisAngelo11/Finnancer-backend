import { Controller, Get, Body, Patch, Post, Req } from '@nestjs/common';
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

  @Patch('finance')
  update(@Req() req: any, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    const correo = req.usuario.mail;
    return this.usuariosService.createFinanceParams(correo, updateUsuarioDto);
  }

  @Get('me')
  getProfile(@Req() req: any) {
    const user = req.usuario; // viene del AuthGuard global
    return this.usuariosService.getInfoUsuario(user.mail);
  }

  @Patch('security')
  updatePassw(@Req() req: any, @Body() body: any) {
    const correo = req.usuario.mail; // Obtiene el correo de la request
    const currentPassw = body.contrasena; // Obtiene la contraseña actual del body
    const newPassw = body.nueva_contrasena; // Obtiene la contraseña nueva del body
    return this.usuariosService.updatePassw(correo, currentPassw, newPassw);
  }
}

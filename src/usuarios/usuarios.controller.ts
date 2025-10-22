import { Controller, Get, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  @Patch(':correo')
  update(@Param('correo') correo: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.createFinanceParams(correo, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosService.remove(+id);
  }

  @Get('me')
  getProfile(@Req() req: any) {
    const user = req.usuario; // viene del AuthGuard global
    return this.usuariosService.getInfoUsuario(user.mail);
  }
}

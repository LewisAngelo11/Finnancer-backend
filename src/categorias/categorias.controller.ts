import { Controller, Get, Post, Body, Req, Patch } from '@nestjs/common';
import { CategoriasService } from './categorias.service';

@Controller('categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Post('new')
  createCategory(@Req() req: any, @Body() body: any) {
    const idUsuario = req.usuario.sub;
    return this.categoriasService.createCategory(idUsuario, body);
  }

  @Get('all')
  getCategories(@Req() req: any) {
    const idUsuario = req.usuario.sub;
    return this.categoriasService.getAllCategories(idUsuario);
  }

  @Patch('update')
  updateCategory(@Req() req: any, @Body() body: any) {
    const idUsuario = req.usuario.sub;
    return this.categoriasService.updateCategory(idUsuario, body);
  }

  @Patch('status')
  changeEstatus(@Req() req: any, @Body() body: any) {
    const idUsuario = req.usuario.sub;
    return this.categoriasService.changeEstatusCategory(idUsuario, body);
  }
}

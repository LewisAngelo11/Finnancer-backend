import { Controller, Get, Post, Body, Patch, Req } from '@nestjs/common';
import { SubcategoriasService } from './subcategorias.service';
import { CreateSubcategoriaDto } from './dto/create-subcategoria.dto';
import { UpdateSubcategoriaDto } from './dto/update-subcategoria.dto';

@Controller('subcategorias')
export class SubcategoriasController {
  constructor(private readonly subcategoriasService: SubcategoriasService) {}

  @Post('create')
  createSubcategory(@Req() req: any, @Body() body: CreateSubcategoriaDto) {
    const idUsuario = req.usuario.sub;
    return this.subcategoriasService.createSubcategory(idUsuario, body);
  }

  @Get('all')
  getAllSubcategories(@Req() req: any) {
    const idUsuario = req.usuario.sub;
    return this.subcategoriasService.getAllSubcategories(idUsuario);
  }

  @Patch('update')
  updateSubcategory(@Req() req: any, @Body() body: UpdateSubcategoriaDto) {
    const idUsuario = req.usuario.sub;
    return this.subcategoriasService.updateSubcategory(idUsuario, body);
  }

  @Patch('change-status')
  changeStatusSubcategory(@Req() req: any, @Body() body: UpdateSubcategoriaDto) {
    const idUsuario = req.usuario.sub;
    return this.subcategoriasService.changeStatusSubcategory(idUsuario, body);
  }
}

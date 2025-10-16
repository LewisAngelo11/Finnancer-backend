import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt'; // Importar bcrypt para hashear la contra del usuario

@Injectable()
export class UsuariosService {
  fechaAlta = new Date();

  constructor(private prisma: PrismaService) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    //Hashear la contraseña antes de guardarla a la BD.
    const saltOrRounds = 10;
    const hash = createUsuarioDto.contrasena;
    const passHash = await bcrypt.hash(hash, saltOrRounds);

    createUsuarioDto.contrasena = passHash;
    createUsuarioDto.fechaCreacion = this.fechaAlta;

    await this.prisma.usuario.create({
      data: {
        nombre: createUsuarioDto.nombre,
        apellido_paterno: createUsuarioDto.apellidoP,
        apellido_materno: createUsuarioDto.apellidoM,
        correo: createUsuarioDto.correo,
        contrasena: createUsuarioDto.contrasena,
        fecha_creacion: createUsuarioDto.fechaCreacion,
        foto_perfil: createUsuarioDto.fotoPerfil,
        estatus: createUsuarioDto.estatus,
        presupuesto: createUsuarioDto.presupuesto,
        ingreso_minimo: createUsuarioDto.ingresoMinimos,
        egreso_maximo: createUsuarioDto.egresoMaximos,
        ahorro_mensual: createUsuarioDto.ahorroMensual
      },
    });

    return {
      mensaje: 'Usuario registrado correctamente',
    };
  }

  // Función que busca un usuario por el correo electrónico
  async findByCorreo(correo: string) {
    return await this.prisma.usuario.findUnique({
      where: { correo },
    });
  }

  findAll() {
    return `This action returns all usuarios`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}

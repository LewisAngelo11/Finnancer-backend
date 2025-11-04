import { Injectable } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PersonasService {
  constructor(private prisma: PrismaService) {}

  // Método que crea una persona (Cliente o Proveedor)
  async createPerson(idUsuario: number, createPersonaDto: CreatePersonaDto) {
    const persona = await this.prisma.persona.create({
      data: {
        nombre: createPersonaDto.nombre,
        tipo: createPersonaDto.tipoPersona,
        id_usuario: idUsuario,
      },
    });

    return {
      mensaje: createPersonaDto.tipoPersona === 'cliente'
      ? '¡Cliente creado correctamente!'
      : '¡Proveedor creado correctamente!',
      persona,
    };
  }

  // Método que obtiene todos los clientes del usuario
  async getClients(idUsuario: number) {
    return await this.prisma.persona.findMany({
      where: {
        id_usuario: idUsuario,
        tipo: 'cliente',
      },
    });
  }

  // Método que obtiene todos los proveedores del usuario
  async getProviders(idUsuario: number) {
    return await this.prisma.persona.findMany({
      where: {
        id_usuario: idUsuario,
        tipo: 'proveedor',
      },
    });
  }

  // Método que actualiza los datos de la persona (Cliente, Proveedor)
  async updatePerson(idUsuario: number, updatePersonaDto: UpdatePersonaDto) {
    const persona = await this.prisma.persona.update({
      where: {
        id_usuario: idUsuario,
        id_persona: updatePersonaDto.idPersona,
      },
      data: {
        nombre: updatePersonaDto.nombre,
        tipo: updatePersonaDto.tipoPersona,
      },
    });

    return {
      mensaje: updatePersonaDto.tipoPersona === 'cliente'
      ? '¡Cliente creado correctamente!'
      : '¡Proveedor creado correctamente!',
      persona,
    };
  }

  // Método que cambia el estatus de una persona (Cliente o Proveedor)
  async changeStatusPerson(idUsuario: number, updatePersonaDto: UpdatePersonaDto) {
    const persona = await this.prisma.persona.update({
      where: {
        id_persona: updatePersonaDto.idPersona,
        id_usuario: idUsuario,
      },
      data: {
        estatus: updatePersonaDto.estatus,
      },
    });

    return {
      mensaje: updatePersonaDto.tipoPersona === 'cliente'
      ? '¡Cliente creado correctamente!'
      : '¡Proveedor creado correctamente!',
      persona,
    };
  }
}

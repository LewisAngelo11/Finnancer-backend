import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { VerificationModule } from './verification/verification.module';
import { PerfilesModule } from './perfiles/perfiles.module';
import { CategoriasModule } from './categorias/categorias.module';
import { TransaccionesModule } from './transacciones/transacciones.module';
import { SubcategoriasModule } from './subcategorias/subcategorias.module';
import { PersonasModule } from './personas/personas.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule, UsuariosModule,
    AuthModule, VerificationModule, PerfilesModule, CategoriasModule, TransaccionesModule,
    SubcategoriasModule, PersonasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

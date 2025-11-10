import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { MailModule } from 'src/mail/mail.module';
import { VerificationModule } from 'src/verification/verification.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';
import { CategoriasModule } from 'src/categorias/categorias.module';
import { PerfilesModule } from 'src/perfiles/perfiles.module';

@Module({
  imports: [MailModule, PrismaModule, VerificationModule,
    UsuariosModule, CategoriasModule, PerfilesModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' }
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    }
  ]
})
export class AuthModule {}

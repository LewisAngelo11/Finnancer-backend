import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { MailModule } from 'src/mail/mail.module';
import { VerificationModule } from 'src/verification/verification.module';

@Module({
  imports: [MailModule, PrismaModule, VerificationModule,
    UsuariosModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '3600s' }
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}

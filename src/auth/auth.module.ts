import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { MailModule } from 'src/mail/mail.module';
import { VerificationModule } from 'src/verification/verification.module';

@Module({
  imports: [MailModule, PrismaModule, UsuariosModule, VerificationModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}

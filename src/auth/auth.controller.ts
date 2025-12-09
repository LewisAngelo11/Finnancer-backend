import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { CreateUsuarioDto } from 'src/usuarios/dto/create-usuario.dto';
import { Public } from 'src/public/public.decorator';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService, private usuariosService: UsuariosService) {}

    // Endpoint de login
    @Public()
    @Post('login')
    signIn(@Body() authDto: AuthDto ) {
        return this.authService.signIn(authDto);
    }

    // Endpoint de crear cuenta
    @Public()
    @Post('create')
    signUp(@Body() createUsuarioDto: CreateUsuarioDto) {
        return this.authService.signUp(createUsuarioDto);
    }

    // Endpoint para enviar un correo
    @Public()
    @Post('send-mail')
    async sendMail( @Body() {to, name} ): Promise<{ message: string }> {
        await this.authService.prepareSendMail(to, name);
        return { message: '¡Correo enviado exitósamente!' };
    }

    @Public()
    @Post('send-mail/recovery-passw')
    async sendMailToPassW(@Body('to') to: string): Promise<{ message: string }> {
        await this.authService.prepareSendMailRecoverPassw(to);
        return { message: '¡Correo enviado exitósamente!' };
    }

    @Public()
    @Post('verify-mail')
    async validateCode(@Body() body: { correo: string, codigo: number }) {
        return await this.authService.validateCode(body.correo, body.codigo);
    }

    @Public()
    @Post('reset-password')
    async resetPassword(@Body() body: { correo: string, newPassword: string }) {
        return await this.usuariosService.resetPassword(body.correo, body.newPassword);
    }
}

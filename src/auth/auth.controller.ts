import { Body, Controller, Post} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { CreateUsuarioDto } from 'src/usuarios/dto/create-usuario.dto';

// Body para enviar un correo electrónico
class SendMailDto {
    to: string;
    name: string;
    code: number;
}

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    // Endpoint de login
    @Post()
    signIn(@Body() authDto: AuthDto ) {
        return this.authService.signIn(authDto);
    }

    // Endpoint de crear cuenta
    @Post('create')
    signUp(@Body() createUsuarioDto: CreateUsuarioDto) {
        return this.authService.signUp(createUsuarioDto);
    }

    // Endpoint para enviar un correo
    @Post('send-mail')
    async sendMail( @Body() {to, name} ): Promise<{ message: string }> {
        await this.authService.prepareSendMail(to, name);
        return { message: '¡Correo enviado exitósamente!' };
    }
}

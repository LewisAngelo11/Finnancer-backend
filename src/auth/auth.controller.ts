import { Body, Controller, Post} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { CreateUsuarioDto } from 'src/usuarios/dto/create-usuario.dto';

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
}

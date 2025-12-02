import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
    constructor(private mailerService: MailerService) {}

    // Función que manda un correo de verificación a un nuevo usuario registrado
    async sendMailVerification(
        to: string,
        subject: string,
        template: string,
        context: object,
    ): Promise<void> {
        await this.mailerService.sendMail({
            to,
            subject,
            template,
            context,
        });
    }

    // Función que envía un código de verificación del correo para permitir cambiar la contraseña del usuario
    async sendMailChangePassw(
        to: string,
        template: string,
        context: object,
    ): Promise<void> {
        await this.mailerService.sendMail({
            to,
            template,
            context,
        });
    }

    // Función que genera el código de verificación al correo
    generateVerificationCode(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import sgMail from '@sendgrid/mail'; // Cambia esto: quita el *
import * as fs from 'fs';
import * as path from 'path';
import * as Handlebars from 'handlebars';

@Injectable()
export class MailService {
    private readonly logger = new Logger(MailService.name);
    private useSendGrid: boolean;
    private fromEmail: string;

    constructor(
        private mailerService: MailerService,
        private configService: ConfigService,
    ) {
        // Detectar si debemos usar SendGrid
        const sendGridApiKey = this.configService.get<string>('SENDGRID_API_KEY');
        this.useSendGrid = !!sendGridApiKey;

        // Obtener el email del remitente
        this.fromEmail = this.configService.get<string>('MAIL_USER') || '';

        if (this.useSendGrid && sendGridApiKey) {
            sgMail.setApiKey(sendGridApiKey);
            this.logger.log('Usando SendGrid para envío de correos');
        } else {
            this.logger.log('Usando Nodemailer para envío de correos');
        }
    }

    // Función auxiliar para compilar templates de Handlebars
    private compileTemplate(templateName: string, context: object): string {
        const templatePath = path.join(__dirname, '..', 'templates', `${templateName}.hbs`);
        const templateSource = fs.readFileSync(templatePath, 'utf8');
        const template = Handlebars.compile(templateSource);
        return template(context);
    }

    // Función que manda un correo de verificación a un nuevo usuario registrado
    async sendMailVerification(
        to: string,
        subject: string,
        template: string,
        context: object,
    ): Promise<void> {
        if (this.useSendGrid) {
            await this.sendWithSendGrid(to, subject, template, context);
        } else {
            await this.mailerService.sendMail({
                to,
                subject,
                template,
                context,
            });
        }
    }

    // Función que envía un código de verificación del correo para permitir cambiar la contraseña del usuario
    async sendMailChangePassw(
        to: string,
        template: string,
        context: object,
    ): Promise<void> {
        const subject = 'Cambio de contraseña';
        
        if (this.useSendGrid) {
            await this.sendWithSendGrid(to, subject, template, context);
        } else {
            await this.mailerService.sendMail({
                to,
                template,
                context,
            });
        }
    }

    // Método privado para enviar con SendGrid
    private async sendWithSendGrid(
        to: string,
        subject: string,
        template: string,
        context: object,
    ): Promise<void> {
        try {
            if (!this.fromEmail) {
                throw new Error('MAIL_USER no está configurado en las variables de entorno');
            }

            const html = this.compileTemplate(template, context);
            
            const msg = {
                to,
                from: this.fromEmail,
                subject,
                html,
            };

            await sgMail.send(msg);
            this.logger.log(`Correo enviado exitosamente a ${to}`);
        } catch (error) {
            this.logger.error(`Error al enviar correo: ${error.message}`);
            throw error;
        }
    }

    // Función que genera el código de verificación al correo
    generateVerificationCode(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
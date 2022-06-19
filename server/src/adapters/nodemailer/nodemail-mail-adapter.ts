import nodemailer from "nodemailer"
import { SendEmailAdapter, SendEmailAdapterData } from "../send-mail-adapter";

export class NodemailMailAdapter implements SendEmailAdapter{
    async send(data: SendEmailAdapterData) {
        const { from, to, subject, html } = data

        const transport = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "d74aa94b90f830",
                pass: "f9a1c1686aa250"
            }
        });

        await transport.sendMail({
            from,
            to,
            subject,
            html
        })
    }
}
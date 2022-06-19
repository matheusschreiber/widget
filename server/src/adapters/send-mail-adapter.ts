export interface SendEmailAdapterData {
    from: string;
    to: string;
    subject: string;
    html: string | Object;
}

export interface SendEmailAdapter {
    send: (data: SendEmailAdapterData) => Promise<void>
}
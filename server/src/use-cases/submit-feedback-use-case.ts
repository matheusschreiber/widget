import { SendEmailAdapter } from "../adapters/send-mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-Repository";

interface SubmitFeedbackUseCaseRequest {
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackUseCase {
    // código padrão sem ser contraido
    // private feedbackrepository: FeedbacksRepository

    // constructor(
    //     feedbackrepository: FeedbacksRepository,
    // ){
    //     this.feedbackrepository = feedbackrepository
    // }
    
    constructor(
        private feedbackrepository: FeedbacksRepository,
        private sendemailadapter : SendEmailAdapter
    ){}

    async execute(request: SubmitFeedbackUseCaseRequest) {
        const { type, comment, screenshot } = request;

        if (!type) throw new Error('Type is required')
        
        if (!comment) throw new Error('Type is required')

        if (screenshot && !screenshot.startsWith('data:image/png;base64')){
            throw new Error('Invalid Screenshot file')
        }

        await this.feedbackrepository.create({type, comment, screenshot})

        await this.sendemailadapter.send({
            from: "Equipe blank <equipe@gmail.com>",
            to: "Matheus Schreiber <matheusmeier.sch2341@gmail.com>",
            subject: "Novo feedback",
            html: {path:"./views/mail.html"}
        })
    }
}
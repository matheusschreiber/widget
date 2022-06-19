import express from "express"
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { NodemailMailAdapter } from "./adapters/nodemailer/nodemail-mail-adapter";

export const routes = express.Router()
routes.use(express.json())

routes.post("/feedbacks", async (req,res)=> {
    const { type, comment, screenshot } = req.body;

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository
    const nodemaileradapter = new NodemailMailAdapter

    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbacksRepository,
        nodemaileradapter
    )

    submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot
    })

    return res.status(201).send()
})
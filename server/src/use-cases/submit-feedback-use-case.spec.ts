import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()

const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy},
    { send: sendMailSpy},
)

describe('Submit feedback', () =>{
    it('should be able to submit a feedback', async ()=> {
        await expect(submitFeedbackUseCase.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'data:image/png;base64asdjasidj'
        })).resolves.not.toThrow()

        expect(createFeedbackSpy).toHaveBeenCalled()
        expect(sendMailSpy).toHaveBeenCalled()
    })


    it('should not be able to submit a feedback without a type', async ()=> {
        await expect(submitFeedbackUseCase.execute({
            type: '',
            comment: 'example comment',
            screenshot: 'data:image/png;base64asdjasidj'
        })).rejects.toThrow()
    })

    it('should not be able to submit a feedback without a comment', async ()=> {
        await expect(submitFeedbackUseCase.execute({
            type: 'Bug',
            comment: '',
            screenshot: 'data:image/png;base64asdjasidj'
        })).rejects.toThrow()
    })

    it('should not be able to submit a feedback with an invalid screenshot', async ()=> {
        await expect(submitFeedbackUseCase.execute({
            type: 'Bug',
            comment: 'example comment',
            screenshot: 'asdjasidj'
        })).rejects.toThrow()
    })  
})
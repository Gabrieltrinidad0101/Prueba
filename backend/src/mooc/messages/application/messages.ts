import { type TypeInstanceValidation } from '../../share/domain/Validator'
import { type ISendMessage } from '../domian/messages'
import type IWhatsAppController from '../../whatsAppControl/domian/whatsAppController'
import { type IHttpStatusCode } from '../../../../../share/domain/httpResult'
export default class MessagesApp {
  constructor (
    private readonly instanceValidation: TypeInstanceValidation,
    private readonly whatsAppController: IWhatsAppController
  ) { }

  sendMessage = async (sendMessage: ISendMessage): Promise<IHttpStatusCode> => {
    const error = this.instanceValidation(sendMessage)
    if (error !== undefined) {
      return {
        statusCode: 422,
        error,
        message: 'Internal Error try later'
      }
    }
    await this.whatsAppController.sendMessage(sendMessage)
    return {
      message: 'success'
    }
  }
}

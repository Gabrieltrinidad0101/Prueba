import { type IHttpStatusCode } from '../../../../../share/domain/httpResult'
import { type Request, type Response } from 'express'
import type MessagesApp from '../application/messages'
import { type ISendMessage } from '../domian/messages'

export default class MessagesControl {
  constructor (
    private readonly messagesApp: MessagesApp
  ) {}

  sendMessage = async (req: Request, res: Response): Promise<IHttpStatusCode> => {
    const _id = req.params._id
    const data = req.body as ISendMessage
    data._id = _id
    return await this.messagesApp.sendMessage(data)
  }
}

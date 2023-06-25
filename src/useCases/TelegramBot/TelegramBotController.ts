import { Request, Response } from "express";
import { TelegramBotUseCase } from "./TelegramBotUseCase";

export class TelegramBotController {

  constructor(
    private telegramBotUseCase: TelegramBotUseCase
  ) { }
  async handle(req: Request, res: Response) {
    const { message } = req.body;
    try {
      this.telegramBotUseCase.execute({ message });
      res.status(200).json({ msg: "Message sent successfully" });
    } catch (error) {
      res.status(error.statusCode ?? 400).json({ error: error.message });
    }
  }
}
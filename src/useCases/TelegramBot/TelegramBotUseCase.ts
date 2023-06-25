import { Telegraf } from "telegraf";
import { ITelegramBotRequestDTO } from "./TelegramBotDTO";

export class TelegramBotUseCase {
  async execute({ message }: ITelegramBotRequestDTO) {
    const bot = new Telegraf(process.env.BOT_TOKEN);
    bot.telegram.sendMessage(process.env.CHAT_ID, message);
  }
}
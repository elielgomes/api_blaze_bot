import { TelegramBotUseCase } from "./TelegramBotUseCase";
import { TelegramBotController } from "./TelegramBotController";

const telegramBotUseCase = new TelegramBotUseCase();
const telegramBotController = new TelegramBotController(telegramBotUseCase);
export default telegramBotController;
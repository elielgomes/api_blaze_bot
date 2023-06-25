import { GetCurrentRoundUseCase } from "./GetCurrentRoundUseCase";
import { GetCurrentRoundController } from "./GetCurrentRoundController";

const getCurrentRoundUseCase = new GetCurrentRoundUseCase();
const getCurrentRoundController = new GetCurrentRoundController(getCurrentRoundUseCase);
export default getCurrentRoundController;

import { GetHistoryUseCase } from "./GetHistoryUseCase";
import { GetHistoryController } from "./GetHistoryController";

const getHistoryUseCase = new GetHistoryUseCase();
const getHistoryController = new GetHistoryController(getHistoryUseCase);
export default getHistoryController;
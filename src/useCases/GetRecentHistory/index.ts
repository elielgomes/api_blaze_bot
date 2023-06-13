import { GetRecentHistoryUseCase } from "./GetRecentHistoryUseCase";
import { GetRecentHistoryController } from "./GetRecentHistoryController";

const getRecentHistoryUseCase = new GetRecentHistoryUseCase();
const getRecentHistoryController = new GetRecentHistoryController(getRecentHistoryUseCase);
export default getRecentHistoryController;
import CustomHttpException from "../../utils/customHttpException";
import { IRecentHistory } from "../GetRecentHistory/GetRecentHistoryUseCase";

export interface IHistory {
  total_pages: number;
  records: Array<IRecentHistory>;
}

export class GetHistoryUseCase {
  async execute() {
    try {
      const response = await fetch("https://blaze.com/api/roulette_games/history");
      const data: IHistory = await response.json();
      return data;
    } catch (error) {
      throw new CustomHttpException(error.message ?? error, error.statusCode ?? error.status ?? 400);
    }
  }
}
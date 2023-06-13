import CustomHttpException from "../../utils/customHttpException";

export interface IRecentHistory {
  id: string;
  created_at: string;
  color: number;
  roll: number;
  server_seed: string;
}

export class GetRecentHistoryUseCase {
  async execute() {
    try {
      const response = await fetch("https://blaze.com/api/roulette_games/recent");
      const data: Array<IRecentHistory> = await response.json();
      return data;
    } catch (error) {
      throw new CustomHttpException(error.message ?? error, error.statusCode ?? error.status ?? 400);
    }
  }
}
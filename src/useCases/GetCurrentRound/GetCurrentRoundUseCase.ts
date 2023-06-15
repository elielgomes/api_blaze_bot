import CustomHttpException from "../../utils/customHttpException";

export interface ICurrentRound {
  id: string;
  color: number | null;
  roll: number | null;
  status: "waiting" | "rolling" | "complete";
}

export class GetCurrentRoundUseCase {
  async execute() {
    try {
      const response = await fetch("https://blaze.com/api/roulette_games/current");
      const data: ICurrentRound = await response.json();
      return data;
    } catch (error) {
      throw new CustomHttpException(error.message ?? error, error.statusCode ?? error.status ?? 400);
    }
  }
}
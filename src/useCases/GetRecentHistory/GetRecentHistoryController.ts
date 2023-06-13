import { Request, Response } from "express";
import { GetRecentHistoryUseCase } from "./GetRecentHistoryUseCase";

export class GetRecentHistoryController {

  constructor(
    private getRecentHistoryUseCase: GetRecentHistoryUseCase
  ) { }

  async handle(req: Request, res: Response) {
    try {
      const recentHistory = await this.getRecentHistoryUseCase.execute();
      res.status(200).json(recentHistory);
    } catch (error) {
      res.status(error.statusCode ?? 400).json({ error: error.message });
    }
  }
}
import { Request, Response } from "express";
import { GetHistoryUseCase } from "./GetHistoryUseCase";

export class GetHistoryController {

  constructor(
    private getHistoryUseCase: GetHistoryUseCase
  ) { }

  async handle(req: Request, res: Response) {
    try {
      const recentHistory = await this.getHistoryUseCase.execute();
      res.status(200).json(recentHistory);
    } catch (error) {
      res.status(error.statusCode ?? 400).json({ error: error.message });
    }
  }
}
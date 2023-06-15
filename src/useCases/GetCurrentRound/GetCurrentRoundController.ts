import { Request, Response } from "express";
import { GetCurrentRoundUseCase } from "./GetCurrentRoundUseCase";

export class GetCurrentRoundController {

  constructor(
    private getCurrentRoundUseCase: GetCurrentRoundUseCase
  ) { }

  async handle(req: Request, res: Response) {
    try {
      const { id, color, roll, status } = await this.getCurrentRoundUseCase.execute();
      res.status(200).json({ id, color, roll, status });
    } catch (error) {
      res.status(error.statusCode ?? 400).json({ error: error.message });
    }
  }
}
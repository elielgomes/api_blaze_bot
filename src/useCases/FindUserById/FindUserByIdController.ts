import { Request, Response } from "express";
import { FindUserByIdUseCase } from "./FindUserByIdUseCase";

export class FindUserByIdController {

  constructor(
    private findUserByIdUseCase: FindUserByIdUseCase
  ) { }

  async handle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await this.findUserByIdUseCase.execute({ id });
      res.status(200).json({ user });
    } catch (error) {
      res.status(error.statusCode ?? 400).json({ error: error.message });
    }
  }
}
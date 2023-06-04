import { Request, Response } from "express";
import { FindUserByTokenUseCase } from "./FindUserByTokenUseCase";

export class FindUserByTokenController {

  constructor(
    private findUserByTokenUseCase: FindUserByTokenUseCase
  ) { }

  async handle(req: Request, res: Response) {
    const { token } = req.body;
    try {
      const user = await this.findUserByTokenUseCase.execute({ token });
      res.status(200).json({ ...user });
    } catch (error) {
      res.status(error.statusCode ?? 400).json({ error: error.message });
    }
  }
}
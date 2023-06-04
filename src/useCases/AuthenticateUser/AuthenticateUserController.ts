import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export class AuthenticateUserController {

  constructor(
    private authenticateUserUseCase: AuthenticateUserUseCase
  ) { }

  async handle(req: Request, res: Response) {

    const { username, password } = req.body;

    try {
      const authentication = await this.authenticateUserUseCase.execute({ username, password });
      res.status(200).json({ token: authentication.token, username: authentication.username, permition: authentication.permition });;
    } catch (error) {
      res.status(error.statusCode ?? 401).json({ error: error.message });
    }
  }
}
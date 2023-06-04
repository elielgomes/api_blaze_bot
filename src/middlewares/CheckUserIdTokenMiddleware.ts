import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

export interface ITokenPayload {
  userId: string;
  iat: number;
  exp: number;
}

class CheckUserIdTokenMiddleware {

  async handle(req: Request, res: Response, next: NextFunction) {

    const { id } = req.params;
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];

    try {
      const secret = process.env.SECRET;
      const decodedToken = verify(token, secret) as ITokenPayload;
      if (id !== decodedToken.userId) {
        res.status(401).json({ error: "Acess denied!" });
      }
      next();
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

}

export default new CheckUserIdTokenMiddleware();
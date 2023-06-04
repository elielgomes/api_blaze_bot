import { Permitions } from "@prisma/client";

export interface IUserNonSensitive {
  id: string;
  username: string;
  permition: Permitions | null;
}

export interface ITokenPayload {
  userId: string;
  iat: number;
  exp: number;
}
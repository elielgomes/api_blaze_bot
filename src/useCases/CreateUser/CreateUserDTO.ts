import { Permitions } from "@prisma/client";

export interface ICreateUserRequestDTO {
  username: string;
  password: string;
  confirmPassword: string;
  permition: Permitions | null;
}
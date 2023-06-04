import { User } from "@prisma/client";
import { IUserNonSensitive } from "../../interfaces";

export interface IUserRepository {
  findByUsername: (username: string) => Promise<User>;
  create: (user: User) => Promise<void>;
  findById: (userId: string) => Promise<IUserNonSensitive>;
}
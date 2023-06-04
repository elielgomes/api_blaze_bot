import { User } from "@prisma/client";
import { IUserRepository } from "./IUserRepository";
import { client } from "../../database/prisma.client";
import { IUserNonSensitive } from "../../interfaces";

export class DBUserRepository implements IUserRepository {

  async create({ id, username, password, permition }: User): Promise<void> {
    await client.user.create({
      data: {
        id,
        username,
        password,
        permition,
      }
    });

  }

  async findByUsername(username: string): Promise<User> {
    const user = await client.user.findFirst({
      where: {
        username: username,
      }
    });
    return user;
  };

  async findById(userId: string): Promise<IUserNonSensitive> {
    const user = await client.user.findFirst({
      where: {
        id: userId,
      },
      select: {
        id: true,
        username: true,
        permition: true,
      }
    });
    return user;
  }


}
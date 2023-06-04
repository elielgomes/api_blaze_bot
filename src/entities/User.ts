import { v4 as uuidv4 } from "uuid";
import { User, Permitions } from "@prisma/client";

export class UserEntity implements User {

  public readonly id: string;

  public username: string;
  public password: string;
  public permition: Permitions | null;

  constructor(props: Omit<User, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuidv4();
    }
  }
}
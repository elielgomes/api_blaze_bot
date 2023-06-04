import { verify } from "jsonwebtoken";
import { ITokenPayload } from "../../interfaces";
import { IUserRepository } from "../../repositories/UserRepository/IUserRepository";
import CustomHttpException from "../../utils/customHttpException";
import { IFindUserByTokenRequestDTO } from "./FindUserByTokenDTO";

export class FindUserByTokenUseCase {
  constructor(
    private userRepository: IUserRepository
  ) { }

  async execute({ token }: IFindUserByTokenRequestDTO) {

    if (!token) {
      throw new CustomHttpException("Token Id is required!", 400);
    }

    const secret = process.env.SECRET;
    const decodedToken = verify(token, secret) as ITokenPayload;

    const user = this.userRepository.findById(decodedToken.userId);

    if (!user) {
      throw new CustomHttpException("User don't exists!", 404);
    }

    return user
  }
}
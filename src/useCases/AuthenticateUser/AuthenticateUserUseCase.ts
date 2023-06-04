import { compare } from "bcrypt";
import { IUserRepository } from "../../repositories/UserRepository/IUserRepository";
import CustomHttpException from "../../utils/customHttpException";
import { IAuthenticateUserRequestDTO } from "./AuthenticateUserDTO";
import { GenerateTokenProvider } from "../../providers/GenerateTokenProvider";

export class AuthenticateUserUseCase {

  constructor(
    private userRepository: IUserRepository,
  ) { }

  async execute({ username, password }: IAuthenticateUserRequestDTO) {

    if (!username) {
      throw new CustomHttpException("Username is required!", 400);
    }

    if (!password) {
      throw new CustomHttpException("Password is required!", 400);
    }

    const user = await this.userRepository.findByUsername(username);

    if (!user) {
      throw new CustomHttpException("This User do not exists!", 404);
    }

    const checkPassword = await compare(password, user.password);

    if (!checkPassword) {
      throw new CustomHttpException("Invalid username or password!", 401);
    }

    const tokenProvider = new GenerateTokenProvider();
    const token = await tokenProvider.generate(user.id);

    return { token: token, username: user.username, permition: user.permition };

  }
}
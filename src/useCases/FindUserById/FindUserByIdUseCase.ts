import { IUserRepository } from "../../repositories/UserRepository/IUserRepository";
import CustomHttpException from "../../utils/customHttpException";
import { IFindUserByIdRequestDTO } from "./FindUserByIdDTO";

export class FindUserByIdUseCase {
  constructor(
    private userRepository: IUserRepository
  ) { }

  async execute({ id }: IFindUserByIdRequestDTO) {

    if (!id) {
      throw new CustomHttpException("User Id is required!", 400);
    }

    const user = this.userRepository.findById(id);

    if (!user) {
      throw new CustomHttpException("User don't exists!", 404);
    }

    return user
  }
}
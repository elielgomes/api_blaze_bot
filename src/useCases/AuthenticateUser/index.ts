import { DBUserRepository } from "../../repositories/UserRepository/DBUserRepository";
import { AuthenticateUserController } from "./AuthenticateUserController";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

const dbUserRepository = new DBUserRepository();

const authenticateUserUseCase = new AuthenticateUserUseCase(dbUserRepository);
const authenticateUserController = new AuthenticateUserController(authenticateUserUseCase);
export default authenticateUserController;
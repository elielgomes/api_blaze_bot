import { DBUserRepository } from "../../repositories/UserRepository/DBUserRepository";
import { FindUserByIdUseCase } from "./FindUserByIdUseCase";
import { FindUserByIdController } from "./FindUserByIdController";

const dbUserRepository = new DBUserRepository();
const findUserByIdUseCase = new FindUserByIdUseCase(dbUserRepository);
const findUserByIdController = new FindUserByIdController(findUserByIdUseCase);
export default findUserByIdController;


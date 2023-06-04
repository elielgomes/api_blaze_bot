import { DBUserRepository } from "../../repositories/UserRepository/DBUserRepository";
import { FindUserByTokenUseCase } from "./FindUserByTokenUseCase";
import { FindUserByTokenController } from "./FindUserByTokenController";

const dbUserRepository = new DBUserRepository();
const findUserByTokenUseCase = new FindUserByTokenUseCase(dbUserRepository);
const findUserByTokenController = new FindUserByTokenController(findUserByTokenUseCase);
export default findUserByTokenController;


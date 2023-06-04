import { Router } from "express";

// Controllers -----------------------------
import createUserController from "./useCases/CreateUser";
import authenticateUserController from "./useCases/AuthenticateUser";
import findUserByIdController from "./useCases/FindUserById";
import findUserByTokenController from "./useCases/FindUserByToken";

// Middlewares -----------------------------
import CheckUserTokenMiddleware from "./middlewares/CheckUserTokenMiddleware";
import CheckUserIdTokenMiddleware from "./middlewares/CheckUserIdTokenMiddleware";
//-----------------------------

export const router = Router();

//Public Routes ---------------------->>
router.post("/api/register", (req, res) => createUserController.handle(req, res));
router.post("/api/login", (req, res) => authenticateUserController.handle(req, res));

//Private Routes ---------------------->>
router.get("/api/user/:id",
  CheckUserTokenMiddleware.handle,
  CheckUserIdTokenMiddleware.handle,
  (req, res) => findUserByIdController.handle(req, res));

router.get("/api/check-token-user", CheckUserTokenMiddleware.handle, (req, res) => {
  res.status(200);
});

router.post("/api/find-user-by-token", CheckUserTokenMiddleware.handle, (req, res) => findUserByTokenController.handle(req, res));
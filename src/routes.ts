import { Router } from "express";

// Controllers -----------------------------
import createUserController from "./useCases/CreateUser";
import authenticateUserController from "./useCases/AuthenticateUser";
import findUserByIdController from "./useCases/FindUserById";
import findUserByTokenController from "./useCases/FindUserByToken";
import getRecentHistoryController from "./useCases/GetRecentHistory";
import getHistoryController from "./useCases/GetHistory";
import getCurrentRoundController from "./useCases/GetCurrentRound";
import telegramBotController from "./useCases/TelegramBot";
// Middlewares -----------------------------
import CheckUserTokenMiddleware from "./middlewares/CheckUserTokenMiddleware";
import CheckUserIdTokenMiddleware from "./middlewares/CheckUserIdTokenMiddleware";
//-----------------------------

export const router = Router();

//Public Routes ---------------------->>
router.post("/api/register", (req, res) => createUserController.handle(req, res));
router.post("/api/login", (req, res) => authenticateUserController.handle(req, res));
router.post("/api/bot", (req, res) => telegramBotController.handle(req, res));
router.get("/api/history", (req, res) => getHistoryController.handle(req, res));
router.get("/api/history/recent", (req, res) => getRecentHistoryController.handle(req, res));
router.get("/api/history/current", (req, res) => getCurrentRoundController.handle(req, res));

//Private Routes ---------------------->>
router.get("/api/user/:id", CheckUserTokenMiddleware.handle, CheckUserIdTokenMiddleware.handle, (req, res) => findUserByIdController.handle(req, res));
router.get("/api/check-token-user", CheckUserTokenMiddleware.handle, (req, res) => res.status(200).json({ msg: "Valid authentication" }));
router.post("/api/find-user-by-token", CheckUserTokenMiddleware.handle, (req, res) => findUserByTokenController.handle(req, res));


// endpoints blaze 
/*

https://blaze.com/api/roulette_games/history   = historico ultimas 300 rodadas

https://blaze.com/api/roulette_games/recent = historico ultimas 20 rodadas

https://blaze.com/api/roulette_games/current = cor atual, caso estiver em loading vem null

https://blaze.com/api/roulette_games/settings = aparentemente os games que estao ativos e as salas

*/
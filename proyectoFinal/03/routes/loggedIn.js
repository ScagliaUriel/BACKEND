import express from "express";
import { isAuth} from "../middlewares/authMiddleware.js";
import { getAllData, postPedido } from "../controllers/loggedIn/loggedInHandlers.js";


const { Router } = express;
const loggedInRouter = Router();

loggedInRouter.get("/", isAuth, getAllData);

loggedInRouter.post("/pedido", isAuth, postPedido);

export default loggedInRouter;
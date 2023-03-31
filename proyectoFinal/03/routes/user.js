import express from "express";
import { mongoContainer } from "../models/mongoContainer.js";
import { users } from "../models/schemas/users.js";
import passport from "passport";
import { loginStrategy, registerStrategy } from "../controllers/users/usersHandlers.js";
import { postUser } from "../controllers/users/usersHandlers.js";

passport.use("login", loginStrategy);
passport.use("register", registerStrategy);

const { Router } = express;
const userRouter = Router();

export const userContainer = new mongoContainer(users);

userRouter.post("/login", passport.authenticate("login", { failureRedirect: "/loginError" }), postUser);

userRouter.post("/register", passport.authenticate("register", { failureRedirect: "/registerError" }), postUser);

userRouter.get("/logout")

export default userRouter;
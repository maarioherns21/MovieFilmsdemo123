import express from "express";
import { index, login, signup } from "../controllers/user.js";
const router = express.Router();

router.get("/", index);

router.post("/login", login);

router.post("/signup", signup);

export default router;

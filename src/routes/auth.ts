import { Request, Response, Router } from "express";
import { login_ctrol, register_ctrl, get_users } from "../controllers/auth";
import { log_middleware } from "../middleware/log";

const router = Router();

router.get("/", log_middleware, get_users);
router.post("/register", register_ctrl); 
router.post("/login", login_ctrol);

export { router };
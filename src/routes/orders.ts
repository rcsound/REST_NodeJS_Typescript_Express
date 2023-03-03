import { Router } from "express";
import { get_pelis } from "../controllers/orders";
import { check_jwt } from "../middleware/session";

const router = Router();

router.get("/", check_jwt, get_pelis)

export { router }
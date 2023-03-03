import { Request, Response, Router } from "express";
import { get_pelis, get_peli, update_peli, post_peli, delete_peli } from "../controllers/pelis";
import { log_middleware } from "../middleware/log";

const router = Router();

router.get("/:id", get_peli)

router.get("/", log_middleware, get_pelis)

router.put("/:id", update_peli)

router.post("/", post_peli)

router.delete("/:id", delete_peli)

export { router };
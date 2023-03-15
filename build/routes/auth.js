"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
const log_1 = require("../middleware/log");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", log_1.log_middleware, auth_1.get_users);
router.post("/register", auth_1.register_ctrl);
router.post("/login", auth_1.login_ctrol);
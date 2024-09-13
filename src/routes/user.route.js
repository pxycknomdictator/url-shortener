import { Router } from "express";

const router = Router();

router.route("/register").get(handleShowRegisterPage).post(handleRegisterUser);
router.route("/login").get(handleShowLoginPage).post(handleLoginUser);

export default router;

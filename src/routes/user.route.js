import { Router } from "express";
import {
  handleShowRegisterPage,
  handleShowLoginPage,
  handleRegisterNewUser,
  handleLoginUser,
} from "../controllers/user.controller.js";

const router = Router();

router
  .route("/register")
  .get(handleShowRegisterPage)
  .post(handleRegisterNewUser);
router.route("/login").get(handleShowLoginPage).post(handleLoginUser);

export default router;

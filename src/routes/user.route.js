import { Router } from "express";
import {
  handleShowRegisterPage,
  handleShowLoginPage,
  handleRegisterNewUser,
  handleLoginUser,
  handleLogoutUser
} from "../controllers/user.controller.js";

const router = Router();

router
  .route("/register")
  .get(handleShowRegisterPage)
  .post(handleRegisterNewUser);
router.route("/login").get(handleShowLoginPage).post(handleLoginUser);
router.get("/logout", handleLogoutUser)

export default router;

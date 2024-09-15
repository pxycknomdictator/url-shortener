import { Router } from "express";
import {
  handleGenerateShortUrl,
  handleRedirectUrl,
  handleShowApplication,
} from "../controllers/url.controller.js";
import { decode_Token } from "../middlewares/authenticate.middleware.js";

const router = Router();
router.get("/", decode_Token, handleShowApplication);
router.post("/generate-url", decode_Token, handleGenerateShortUrl);
router.get("/:shortId", handleRedirectUrl);

export default router;

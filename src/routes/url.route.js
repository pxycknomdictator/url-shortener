import { Router } from "express";
import {
  handleGenerateShortUrl,
  handleRedirectUrl,
} from "../controllers/url.controller.js";
import { decode_Token } from "../middlewares/authenticate.middleware.js";

const router = Router();

router.get("/:shortId", handleRedirectUrl);
router.post("/generate-url", decode_Token, handleGenerateShortUrl);

export default router;

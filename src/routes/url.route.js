import { Router } from "express";
import {
  handleGenerateShortUrl,
  handleRedirectUrl,
} from "../controllers/url.controller.js";

const router = Router();

router.get("/:shortId", handleRedirectUrl);
router.post("/generate-url", handleGenerateShortUrl);

export default router;

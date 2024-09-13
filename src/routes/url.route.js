import { Router } from "express";

const router = Router();

router.get("/:shortId", handleRedirectUrl);
router.post("/generate-url", handleGenerateShortUrl);

export default router;

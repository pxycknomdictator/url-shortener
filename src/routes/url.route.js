import { Router } from "express";

const router = Router();

router.get("/:shortId");
router.post("/generate-url");

export default router;

import { AddNovel, getNovelBasedOnName, getNovelBasedOnId, getAllNovel } from "../controllers/novel.controller.js";

import { Router } from "express";

const router = Router();

router.post('/add-novel', AddNovel);
router.get('/novel', getNovelBasedOnName);
router.get('/novel/:id', getNovelBasedOnId);
router.get('/allnovel', getAllNovel);

export default router;
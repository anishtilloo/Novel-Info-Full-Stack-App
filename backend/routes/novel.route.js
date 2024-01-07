import { AddNovel, getNovelBasedOnName, getNovelBasedOnId, getAllNovel } from "../controllers/novel.controller.js";
import upload from "../middleware/upload.js";
import pagenation from "../middleware/pagenation.js";
import NovelModel from "../model/Novel.js";

import { Router } from "express";

const router = Router();

router.post('/add-novel', upload.single('backgroundImg'), AddNovel);
router.get('/novel', getNovelBasedOnName);
router.get('/novel/:id', getNovelBasedOnId);
router.get('/allnovel', pagenation(NovelModel), getAllNovel);

export default router;
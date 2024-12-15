import { AddNovel, getNovelBasedOnName, getNovelBasedOnId, getAllNovel } from "../controllers/novel.controller.js";
import upload from "../middleware/upload.js";
import  authenticate  from '../middleware/auth.js';
import pagination from "../middleware/pagination.js";
import NovelModel from "../model/Novel.js";

import { Router } from "express";

const router = Router();

router.post('/add-novel', authenticate, upload.single('backgroundImg'), AddNovel);
router.get('/novel', authenticate, getNovelBasedOnName);
router.get('/novel/:id', authenticate, getNovelBasedOnId);
router.get('/allnovel', authenticate, pagination(NovelModel), getAllNovel);

export default router;
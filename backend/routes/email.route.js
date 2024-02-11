import { sendEmailFromUser } from "../controllers/user.controller.js";
import  authenticate  from '../middleware/auth.js';

import { Router } from "express";

const router = Router();

router.post('/sendEmail', authenticate, sendEmailFromUser);

export default router;
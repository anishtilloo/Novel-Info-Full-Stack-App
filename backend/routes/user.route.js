import express from 'express';
import  authenticate  from '../middleware/auth.js';

const userRouter = express.Router();

userRouter.get('/profile', authenticate, (req, res) => {
  res.json({ message: `Welcome ${req.user.username}` });
});

export default userRouter;
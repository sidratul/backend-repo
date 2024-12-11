import { Router } from 'express';

export const userRouter = Router();

userRouter.get('/fetch-user-data', (req, res) => {
  res.send("What's up doc ?!");
});

userRouter.post('/update-user-data', (req, res) => {
  res.send("What's up doc ?!");
});
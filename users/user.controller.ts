import { Router } from 'express';
import * as userService from './user.service';

export const userRouter = Router();

userRouter.get('/fetch-user-data', async (req, res) => {
  const users = await userService.findAll();
  res.json(users);
});

userRouter.post('/update-user-data', (req, res) => {
  res.send("What's up doc ?!");
});
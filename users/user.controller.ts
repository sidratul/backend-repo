import { Router } from 'express';
import * as userService from './user.service';

export const userRouter = Router();

userRouter.get('/fetch-user-data', (req, res) => {
  res.json(userService.findAll());
});

userRouter.post('/update-user-data', (req, res) => {
  res.send("What's up doc ?!");
});
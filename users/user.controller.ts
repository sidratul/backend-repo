import { Router } from 'express';
import * as userService from './user.service';
import { validate } from '../middlewares/validation.middleware';
import { UserUpdateData, userUpdateValidation } from './user.validation';

export const userRouter = Router();

userRouter.get('/fetch-user-data', async (req, res) => {
  const users = await userService.findAll();
  res.json(users);
});

userRouter.post('/update-user-data', validate(userUpdateValidation), async (req, res) => {
  const data = req.body as UserUpdateData;
  const user = await userService.updateUser(data);
  res.json(user)
});
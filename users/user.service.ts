import { UserList } from './user';
import * as userRepo from './user.repository';
import { UserUpdateData } from './user.validation';

export const findAll = (): Promise<UserList> => {
  return userRepo.findAll();
}

export const updateUser = (userUpdateData: UserUpdateData) => {
  const { id, ...user} =  userUpdateData;
  return userRepo.updateUser(id, user);
}
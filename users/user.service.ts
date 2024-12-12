import { User, UserList } from './user.types';
import * as userRepo from './user.repository';
import { UserUpdateData } from './user.validation';

export const findAll = (): Promise<UserList> => {
  return userRepo.findAll();
}

export const getMyProfile = (): Promise<UserList> => {
  return userRepo.findAll();
}

export const createUser = (user: User): Promise<UserList> => {
  return userRepo.findAll();
}

export const updateUser = (userUpdateData: UserUpdateData) => {
  const { id, ...user} =  userUpdateData;
  return userRepo.updateUser(id, user);
}
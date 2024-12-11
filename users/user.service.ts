import { UserList } from './user';
import * as userRepo from './user.repository';

export const findAll = (): Promise<UserList> => {
  return userRepo.findAll();
}

export const updateUser = (id: string) => {
  
}
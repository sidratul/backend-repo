import * as userRepo from './user.repository';

export const findAll = () => {
  return userRepo.findAll();
}
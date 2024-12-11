import * as firestore from "../firestore/firestore.config";
import type { User, UserList } from "./user";
import { UserUpdateData } from "./user.validation";

const USER_COLLECTION = 'users';

const getUserCollection = () =>  {
  const db = firestore.getDb();
  return db.collection(USER_COLLECTION);
}

export const findAll = async (): Promise<UserList> => {
  const snapshot = await getUserCollection().get();
  const users: User[] = [];
  snapshot.forEach((doc) => {
    users.push(firestore.getDataWithId<User>(doc));
  });

  return {
    total: users.length,
    data: users,
  };
}

export const updateUser = async (id: string, userData: Omit<UserUpdateData, 'id'>): Promise<User> => {
  const userRef = getUserCollection().doc(id);
  await userRef.update(userData);

  const doc = await userRef.get();
  return firestore.getDataWithId<User>(doc);
}
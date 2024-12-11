import * as firebase from "../firebase/firebase.config";
import type { User, UserList } from "./user";
import { UserUpdateData } from "./user.validation";

const getUserCollection = () =>  {
  const db = firebase.getFirestoreDb();
  return db.collection('users');
}

export const findAll = async (): Promise<UserList> => {
  const snapshot = await getUserCollection().get();
  const users: User[] = [];
  snapshot.forEach((doc) => {
    users.push({
      ...doc.data() as User,
      id: doc.id,
    });
  });

  return {
    total: users.length,
    data: users,
  };
}

export const updateUser = async (id: string, user: Omit<UserUpdateData, 'id'>) => {
  const userRef = getUserCollection().doc(id);
  return userRef.update(user);
}
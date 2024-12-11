import * as firebase from "../firebase/firebase.config";
import type { User, UserList } from "./user";

const getUserCollection = () =>  {
  const db = firebase.getFirestoreDb();
  return db.collection('users');
}

export const findAll = async (): Promise<UserList> => {
  const snapshot = await getUserCollection().get();
  const users: User[] = [];
  snapshot.forEach((doc) => {
    users.push(doc.data() as User);
  });

  return {
    total: users.length,
    data: users,
  };
}

export const updateUser = async (id: string, user: User){
  const userRef = getUserCollection().doc(id);
  return userRef.update(user as Record<string, any>);
}
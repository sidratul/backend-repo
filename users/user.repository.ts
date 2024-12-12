import * as firebase from "../firebase/firebase.config";
import { FirestoreDoc } from "../firebase/firebase.types";
import type { User, UserList } from "./user.types";
import { UserUpdateData } from "./user.validation";

const USER_COLLECTION = 'users';

const getUserCollection = () =>  {
  const db = firebase.db;
  return db.collection(USER_COLLECTION);
}

export const findAll = async (): Promise<UserList> => {
  const snapshot = await getUserCollection().get();
  const users: User[] = [];
  snapshot.forEach((userDoc) => {
    users.push(getDisplayedUserData(userDoc));
  });

  return {
    total: users.length,
    data: users,
  };
}

export const getUser = async (id: string): Promise<User | undefined> => {
  const userDoc = await getUserCollection().doc(id).get();
  if(userDoc.data()) {
    return undefined;
  }

  return getDisplayedUserData(userDoc);
}

export const updateUser = async (id: string, userData: Omit<UserUpdateData, 'id'>) => {
  const userRef = getUserCollection().doc(id);
  // const userDoc = await userRef.get();
  // console.log("userRef", user);

  await userRef.update(userData);

  // const userDoc = await userRef.get();
  // return getDisplayedUserData(userDoc);
}

const getDisplayedUserData = (userDoc: FirestoreDoc): User =>  {
  const userData = userDoc.data()!;
  return {
    id: userDoc.id,
    name: userData.name,
    address: userData.address,
    phoneNumber: userData.phoneNumber,
  }
}
import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";
import { cert, ServiceAccount } from "firebase-admin/app";
import serviceAccount from "../serviceAccountKey.json";
import { FirestoreDoc } from "./firebase.types";

export const app = admin.initializeApp({
  credential: cert(serviceAccount as ServiceAccount),
});

export const db = getFirestore(app);
export const auth = getAuth(app);

// export function getDataWithId<T = unknown>(data: FirestoreDoc) {
//   return {
//     ...data.data(),
//     id: data.id,
//   } as T
// } 
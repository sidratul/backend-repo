import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import { cert, ServiceAccount } from "firebase-admin/app";
import serviceAccount from "../serviceAccountKey.json";

let db: FirebaseFirestore.Firestore;

const init = () => {
  admin.initializeApp({
    credential: cert(serviceAccount as ServiceAccount),
  });

  db = getFirestore();
  return db;
}

export function getFirestoreDb() {
  if (db) {
    return db;
  }

  return init();
}
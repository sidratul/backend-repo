import * as firebase from "../firebase/firebase.config";

export const findAll = async () => {
  const db = firebase.getFirestoreDb();
  const snapshot = await db.collection('users').get();
  snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
  });

  return {};
}
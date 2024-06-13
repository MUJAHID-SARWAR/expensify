import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_7N_pJ8aPSOPBwtjYwo_PFeUTpUrT9zw",
  authDomain: "expensify-1e06e.firebaseapp.com",
  projectId: "expensify-1e06e",
  storageBucket: "expensify-1e06e.appspot.com",
  messagingSenderId: "864015249955",
  appId: "1:864015249955:web:6e0ab9efe1219d065e3796",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export const tripsRef = collection(db, "trips");
export const expensesRef = collection(db, "expenses");

export default app;

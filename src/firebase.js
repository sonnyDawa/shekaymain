import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJ1_3h2kRRWIQ9Cur68Hfz9xLjzu53ijs",
  authDomain: "logo-2-c33ae.firebaseapp.com",
  projectId: "logo-2-c33ae",
  storageBucket: "logo-2-c33ae.appspot.com",
  messagingSenderId: "281574079734",
  appId: "1:281574079734:web:39233a92010503a4e200d7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

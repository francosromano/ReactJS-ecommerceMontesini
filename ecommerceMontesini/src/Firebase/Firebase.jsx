import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCI6NFYkThJYhsJIm3r_ut-PdqCbujVjzM",
  authDomain: "montesini-ecommerce.firebaseapp.com",
  projectId: "montesini-ecommerce",
  storageBucket: "montesini-ecommerce.appspot.com",
  messagingSenderId: "203903739523",
  appId: "1:203903739523:web:cdd8ebc8df57cc81ceddb6"
};

const app = initializeApp(firebaseConfig);

export const database = getFirestore(app)
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBUz3Fgkk5EZIWhGfSHt-GUsqILM504t1g",
  authDomain: "linkdinclone0264.firebaseapp.com",
  projectId: "linkdinclone0264",
  storageBucket: "linkdinclone0264.appspot.com",
  messagingSenderId: "892601870990",
  appId: "1:892601870990:web:6b655111d6740322ccf7df"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth();

export {db, auth};
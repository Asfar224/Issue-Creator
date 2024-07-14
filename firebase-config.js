// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtW5yQUtKbBJ87KEUAXECBC44Fal-WL6I",
  authDomain: "issue-tracker-eeb9e.firebaseapp.com",
  projectId: "issue-tracker-eeb9e",
  storageBucket: "issue-tracker-eeb9e.appspot.com",
  messagingSenderId: "937502124313",
  appId: "1:937502124313:web:f6c7ec7c0d4078e36bfd88",
  measurementId: "G-QSWS7BEEZV"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

export default app;
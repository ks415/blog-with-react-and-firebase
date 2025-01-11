import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYt1aaN5q5DLAV6Ug8LbULkZS5bGev1QA",
  authDomain: "blog-b7c72.firebaseapp.com",
  projectId: "blog-b7c72",
  storageBucket: "blog-b7c72.firebasestorage.app",
  messagingSenderId: "497433135002",
  appId: "1:497433135002:web:46e2649fbfbf9c65795c23"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };

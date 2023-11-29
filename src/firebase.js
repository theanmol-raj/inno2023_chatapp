// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvTMUjh7ZSb0sVs7NAxmFRDpET9tDVUgs",
  authDomain: "innchat-e0ee9.firebaseapp.com",
  projectId: "innchat-e0ee9",
  storageBucket: "innchat-e0ee9.appspot.com",
  messagingSenderId: "393147535607",
  appId: "1:393147535607:web:308052cd8a1fa5028a03f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();


export default app
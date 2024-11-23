// firebase code 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "studytube-18c09.firebaseapp.com",
  projectId: "studytube-18c09",
  storageBucket: "studytube-18c09.firebasestorage.app",
  messagingSenderId: "567941032208",
  appId: "1:567941032208:web:c4e9dedf88fb4aa55bdd95"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "personal-blog-a3a4f.firebaseapp.com",
  projectId: "personal-blog-a3a4f",
  storageBucket: "personal-blog-a3a4f.firebasestorage.app",
  messagingSenderId: "934239383651",
  appId: "1:934239383651:web:25cc43a37561587f758856",
  measurementId: "G-SKGFYGZJC5"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

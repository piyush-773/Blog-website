// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "f-actick.firebaseapp.com",
  projectId: "f-actick",
  storageBucket: "f-actick.firebasestorage.app",
  messagingSenderId: "1009661016862",
  appId: "1:1009661016862:web:7d0d6019b3e072dadce70f",
  measurementId: "G-MVWZNP8TBC"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export {app, analytics};

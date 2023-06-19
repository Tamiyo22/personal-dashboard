// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "twitter-dashboard-8a5cd.firebaseapp.com",
  projectId: "twitter-dashboard-8a5cd",
  storageBucket: "twitter-dashboard-8a5cd.appspot.com",
  messagingSenderId: "566971203300",
  appId: "1:566971203300:web:9839d285b16d85f003f6f1"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
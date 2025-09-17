// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIAyaC38Lnra70XCQdCaL929wkqYi3rMk",
  authDomain: "prepwise-d95db.firebaseapp.com",
  projectId: "prepwise-d95db",
  storageBucket: "prepwise-d95db.firebasestorage.app",
  messagingSenderId: "933810203989",
  appId: "1:933810203989:web:fea7642f1f7be37c7ed3dc",
  measurementId: "G-89Q5LVF30Y"
};
const app= !getApps.length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase
export const auth= getAuth(app);
export const db= getFirestore(app);
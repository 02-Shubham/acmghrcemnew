import { initializeApp, getApps, getApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyBOrWjVV5CB8ndyJ27UCcuWPFexFPZ6anY",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "ACM-ghrcem.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "ACM-ghrcem",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "ACM-ghrcem.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "407922323563",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:407922323563:web:4c647ae3a9b3ff0fefc12e"
};

export const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
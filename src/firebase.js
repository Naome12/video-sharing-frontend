import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBBxFbKVDHIqJKkYsXukpS5TameVXILgCM",
  authDomain: "video-f440b.firebaseapp.com",
  projectId: "video-f440b",
  storageBucket: "video-f440b.appspot.com",
  messagingSenderId: "552477494428",
  appId: "1:552477494428:web:64eaa73691c1ea8e7ef159"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()
export default app;
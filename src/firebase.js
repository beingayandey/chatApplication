// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1A6gRBcMnpxrML9iBN2CyxpuYvGSmwWw",
  authDomain: "beingayandey.firebaseapp.com",
  projectId: "beingayandey",
  storageBucket: "beingayandey.firebasestorage.app",
  messagingSenderId: "912059309905",
  appId: "1:912059309905:web:0d4ae14f67cb765965fd70",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };

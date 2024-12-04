// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhrp_XneNvFhSmv20Ra10C-y6WOJRg5Xg",
  authDomain: "zomintown.firebaseapp.com",
  projectId: "zomintown",
  storageBucket: "zomintown.firebasestorage.app",
  messagingSenderId: "85251277390",
  appId: "1:85251277390:web:59d8cde33efc1473f8391f",
  measurementId: "G-FXNC98VFYJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, analytics, auth, googleProvider };

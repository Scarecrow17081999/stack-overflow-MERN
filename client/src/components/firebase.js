// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs9bO8wVolvQBuL6N9pHH-9Xr38V0NEio",
  authDomain: "stackoverflowclone-395c0.firebaseapp.com",
  projectId: "stackoverflowclone-395c0",
  storageBucket: "stackoverflowclone-395c0.appspot.com",
  messagingSenderId: "159913802643",
  appId: "1:159913802643:web:c25e96984b99d60f6cc666",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };

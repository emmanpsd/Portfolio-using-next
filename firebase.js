// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFE3oMhdv1D-Go3BPhdceG_L_hugyB8lU",
  authDomain: "build-demo-1621802471167.firebaseapp.com",
  projectId: "build-demo-1621802471167",
  storageBucket: "build-demo-1621802471167.appspot.com",
  messagingSenderId: "57065671448",
  appId: "1:57065671448:web:1572a909f9479446bc2c6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getDatabase(app)
import {getApp, getApps, initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl2flUoI1efBP5EqAU2czsoztR3C4i6aQ",
  authDomain: "chatgpt-ccrp.firebaseapp.com",
  projectId: "chatgpt-ccrp",
  storageBucket: "chatgpt-ccrp.appspot.com",
  messagingSenderId: "973444892512",
  appId: "1:973444892512:web:b3ee40f448bccf6acc8005"
};

// Initialize Firebase
const app = getApps().length ? getApp(): initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
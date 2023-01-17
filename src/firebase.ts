// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const googleProvider = new GoogleAuthProvider();
// import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBC_JXGTRx8TcChWIfcQ5hDuVlY63eokSM",
    authDomain: "vuechat-96529.firebaseapp.com",
    databaseURL: "https://vuechat-96529-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "vuechat-96529",
    storageBucket: "vuechat-96529.appspot.com",
    messagingSenderId: "941759698743",
    appId: "1:941759698743:web:e109ba01567d8198dc2cb2",
    measurementId: "G-584NMNZ7TX"
  };
  

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth();

// const analytics = getAnalytics(firebase);

export { firebase, googleProvider, auth, db }
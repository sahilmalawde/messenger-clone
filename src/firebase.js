// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTxQBEoQo92Gs_4q9veAmRHuk_M6Gj694",
  authDomain: "messenger-clone-2e562.firebaseapp.com",
  projectId: "messenger-clone-2e562",
  storageBucket: "messenger-clone-2e562.appspot.com",
  messagingSenderId: "142401288",
  appId: "1:142401288:web:e3ca915fea985eaa2d16bd",
  measurementId: "G-M5JPYVQNK4"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;

import { initializeApp } from "firebase/app";
import{ getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA5fzaWEfvDBWRzhGRiAWOAAy-uxqu4VYA",
    authDomain: "jd-final-pres.firebaseapp.com",
    projectId: "jd-final-pres",
    storageBucket: "jd-final-pres.appspot.com",
    messagingSenderId: "944855405450",
    appId: "1:944855405450:web:34707d711c8c09450a2e73",
    measurementId: "G-SZDQC1V4H3"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export {app, database}
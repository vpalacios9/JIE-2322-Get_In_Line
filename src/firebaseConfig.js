//import { initializeApp } from "firebase/app";
//import{ getFirestore } from 'firebase/firestore'
//import 'firebase/auth'
//import firebase from 'firebase'
//require('firebase/auth')

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA5fzaWEfvDBWRzhGRiAWOAAy-uxqu4VYA",
    authDomain: "jd-final-pres.firebaseapp.com",
    projectId: "jd-final-pres",
    storageBucket: "jd-final-pres.appspot.com",
    messagingSenderId: "944855405450",
    appId: "1:944855405450:web:34707d711c8c09450a2e73",
    measurementId: "G-SZDQC1V4H3"
  };
  
  /*
// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);
//const database = getFirestore(app);
var database = firebase.database()

export {app, database}
*/
const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, database };

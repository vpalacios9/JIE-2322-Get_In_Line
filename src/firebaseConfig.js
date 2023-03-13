// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC5l5TPB1Wucp2z-pH-p0SiXRNl2QW94J0",
//   authDomain: "get-in-line-9c2b8.firebaseapp.com",
//   projectId: "get-in-line-9c2b8",
//   storageBucket: "get-in-line-9c2b8.appspot.com",
//   messagingSenderId: "791828127592",
//   appId: "1:791828127592:web:055ac75549671a8ee040dd",
//   measurementId: "G-7MW33LKH81"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// const firebaseConfig = {
//     apiKey: "AIzaSyA5fzaWEfvDBWRzhGRiAWOAAy-uxqu4VYA",
//     authDomain: "jd-final-pres.firebaseapp.com",
//     projectId: "jd-final-pres",
//     storageBucket: "jd-final-pres.appspot.com",
//     messagingSenderId: "944855405450",
//     appId: "1:944855405450:web:34707d711c8c09450a2e73",
//     measurementId: "G-SZDQC1V4H3"
//   };
const firebaseConfig = {
  apiKey: "AIzaSyC5l5TPB1Wucp2z-pH-p0SiXRNl2QW94J0",
  authDomain: "get-in-line-9c2b8.firebaseapp.com",
  projectId: "get-in-line-9c2b8",
  storageBucket: "get-in-line-9c2b8.appspot.com",
  messagingSenderId: "791828127592",
  appId: "1:791828127592:web:055ac75549671a8ee040dd",
  measurementId: "G-7MW33LKH81"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const auth = getAuth(app);

export {app, database, auth}
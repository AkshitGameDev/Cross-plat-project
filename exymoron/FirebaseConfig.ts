// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWfO5gBqkkIGF5wb5paDAuN3GYIKL98n0",
  authDomain: "domoresports-31765.firebaseapp.com",
  projectId: "domoresports-31765",
  storageBucket: "domoresports-31765.appspot.com",
  messagingSenderId: "565227271338",
  appId: "1:565227271338:web:d10f70c23e71b04d324cd3",
  measurementId: "G-VBFM95ZJYV"
};

// Initialize Firebase
export const FIREBASS_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASS_APP)
export const FIREBASESTORE_DB = getFirestore(FIREBASS_APP)
// const analytics = getAnalytics(app);
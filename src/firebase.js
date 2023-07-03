// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAylwzXCTwKWk8uaM-3XcaN3dDBUTOxTPY",
  authDomain: "kumar-hostel.firebaseapp.com",
  projectId: "kumar-hostel",
  storageBucket: "kumar-hostel.appspot.com",
  messagingSenderId: "1015545430557",
  appId: "1:1015545430557:web:b51e5bf21fb4e73800fcf4",
  measurementId: "G-RJLZFSMHF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
const analytics = getAnalytics(app);
export const db=getFirestore(app);
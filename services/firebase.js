// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
//importat os recursos do firestore
import  {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDT-mpaggRrPcG-anxWYOYa_FHIAVD3iyI",
  authDomain: "at2tri.firebaseapp.com",
  projectId: "at2tri",
  storageBucket: "at2tri.appspot.com",
  messagingSenderId: "921289912681",
  appId: "1:921289912681:web:19eb667af0e97e799ecdf8",
  measurementId: "G-1VYFN8VD24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
//const analytics = getAnalytics(app);
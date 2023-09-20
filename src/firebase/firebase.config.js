// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Import the storage
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtCRZrvdBnsJMzgUzFmrzApOWDchPEOdU",
  authDomain: "biomed-3abc5.firebaseapp.com",
  projectId: "biomed-3abc5",
  storageBucket: "biomed-3abc5.appspot.com",
  messagingSenderId: "783482189020",
  appId: "1:783482189020:web:b4b2ff5583f83a51ba3019",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)

export default app;

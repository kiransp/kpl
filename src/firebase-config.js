// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXHbHltncqjuX-NsitODwbuvYs6TXLCRg",
  authDomain: "kplcricket-d5078.firebaseapp.com",
  projectId: "kplcricket-d5078",
  storageBucket: "kplcricket-d5078.appspot.com",
  messagingSenderId: "905927183858",
  appId: "1:905927183858:web:a691f270023848f896ef6b",
  measurementId: "G-J7SZT44RX7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

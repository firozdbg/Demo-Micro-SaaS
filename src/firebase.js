// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6RL9LTtgWcTQw-64fx28gt_2BEEVs1Mc",
  authDomain: "fir-saas-283ab.firebaseapp.com",
  projectId: "fir-saas-283ab",
  storageBucket: "fir-saas-283ab.firebasestorage.app",
  messagingSenderId: "1087777763496",
  appId: "1:1087777763496:web:eaed375d1e0bd76065d29d",
  measurementId: "G-N1FCQ3FX9Y"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
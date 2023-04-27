import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT8unN85jqdLwLnxT7MuFqOs8TZePLs4g",
  authDomain: "briluadeportiva.firebaseapp.com",
  projectId: "briluadeportiva",
  storageBucket: "briluadeportiva.appspot.com",
  messagingSenderId: "724086038339",
  appId: "1:724086038339:web:a062ba9a5466a3abab59f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);













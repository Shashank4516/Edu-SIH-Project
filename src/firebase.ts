// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFDqfVvVg5zq7WkWApPG3sVw3lC0cAkTA",
  authDomain: "sih-fcbackend.firebaseapp.com",
  projectId: "sih-fcbackend",
  storageBucket: "sih-fcbackend.firebasestorage.app",
  messagingSenderId: "254573929922",
  appId: "1:254573929922:web:0c2aa527bce6fa7008225b",
  measurementId: "G-L5RG1SRL5B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;

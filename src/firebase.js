import { initializeApp } from "firebase/app";
import { getFirestore, } from "firebase/firestore"
import { getAuth } from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBusrqUqN1HKY3Ruy76AbyJWGzuZl0kY5U",
    authDomain: "twitter-clone-47c71.firebaseapp.com",
    projectId: "twitter-clone-47c71",
    storageBucket: "twitter-clone-47c71.appspot.com",
    messagingSenderId: "481817869197",
    appId: "1:481817869197:web:633fa6d9ca8c8cf8659bc4",
    measurementId: "G-ESMXHPCG94"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth();
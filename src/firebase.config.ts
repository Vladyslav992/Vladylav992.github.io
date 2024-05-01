import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-9ajvku-XigymfRb7QxJTrirKd05ZZfo",
  authDomain: "bike-shop-eb3c6.firebaseapp.com",
  projectId: "bike-shop-eb3c6",
  storageBucket: "bike-shop-eb3c6.appspot.com",
  messagingSenderId: "932200293354",
  appId: "1:932200293354:web:9e99d75b10e4249b474893",
  measurementId: "G-26V547T1BP"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

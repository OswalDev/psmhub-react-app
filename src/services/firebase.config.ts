// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, getDoc, addDoc, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";

// TODO: Remove dotenv lib if unused
// import * as dotenv from 'dotenv'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


//Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//TODO: test
export default getFirestore();

//previous method used
// export const db = getFirestore(app);

// const docRef = doc(db, "subjects");
// const docSnap = await getDoc(docRef);

// if(docSnap.exists()){
//   console.log("Document data:", docSnap.data());
// } else {
//   //if docSnap.data() is undefined
//   console.log("ERROR: No document was found")
// }

//get data from firestore
// const subjectList = collection(db, "subjects")

// export const getSubjectListItems = (subjectListId) => {
//   const itemsColRef = collection(db, 'subjects', subjectListId, 'items')
//   return itemsColRef;
// }
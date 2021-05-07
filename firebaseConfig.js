import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyApnIA37JmpyWFC6rQs-uHhUdkoA73wXI8",
    authDomain: "reactjs-ecommerce-quang.firebaseapp.com",
    projectId: "reactjs-ecommerce-quang",
    storageBucket: "reactjs-ecommerce-quang.appspot.com",
    messagingSenderId: "1097310959987",
    appId: "1:1097310959987:web:4def2721fdc145411a2d06"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
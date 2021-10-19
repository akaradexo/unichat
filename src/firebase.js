import firebase from "firebase/app";
import "firebase/auth";


export const auth = firebase.initializeApp( {
  apiKey: "AIzaSyD46Al_94ljOU9i619u5Nmm9iYF7Nbp0F8",
  authDomain: "zyzy-chat-application.firebaseapp.com",
  projectId: "zyzy-chat-application",
  storageBucket: "zyzy-chat-application.appspot.com",
  messagingSenderId: "1055837756213",
  appId: "1:1055837756213:web:e07aed2a02c38058f64a7c"
  }).auth();

  
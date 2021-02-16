import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAn2a1kIVaCOe3p48KkI30fIu76qLXP_yM",
  authDomain: "linkedin-clone-451c6.firebaseapp.com",
  projectId: "linkedin-clone-451c6",
  storageBucket: "linkedin-clone-451c6.appspot.com",
  messagingSenderId: "551550753588",
  appId: "1:551550753588:web:2fb3301042c2bc15b6a361",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

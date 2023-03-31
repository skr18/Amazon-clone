// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnmppOu1_ViUPq-mZn6_jzHRTrbzkFnuM",
  authDomain: "clone-203e2.firebaseapp.com",
  projectId: "clone-203e2",
  storageBucket: "clone-203e2.appspot.com",
  messagingSenderId: "948539611572",
  appId: "1:948539611572:web:7705abf82995a0bb3dbae1",
  measurementId: "G-WHK27JX9QM"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};
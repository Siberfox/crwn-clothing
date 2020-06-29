import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAg7O8TpGt05Mf2EAKKMxOwG02BHhhzjZM",
  authDomain: "crwn-db-f1486.firebaseapp.com",
  databaseURL: "https://crwn-db-f1486.firebaseio.com",
  projectId: "crwn-db-f1486",
  storageBucket: "crwn-db-f1486.appspot.com",
  messagingSenderId: "762869237278",
  appId: "1:762869237278:web:564ddc9cb39c11f001d00f",
  measurementId: "G-SYRDH9KV4F",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

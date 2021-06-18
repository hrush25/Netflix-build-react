import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAAv_poT2BIX2YKTui8b2MyqC8URSPcRV8",
  authDomain: "netflix-build-1510e.firebaseapp.com",
  projectId: "netflix-build-1510e",
  storageBucket: "netflix-build-1510e.appspot.com",
  messagingSenderId: "973912403725",
  appId: "1:973912403725:web:72aff84e80358d8dbb0a44"
};

// Initializing firebase app

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;

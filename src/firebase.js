import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCTRFViMrniniWCtwI7pqnZlPYsJJggOtk",
  authDomain: "e-clone-6359d.firebaseapp.com",
  projectId: "e-clone-6359d",
  storageBucket: "e-clone-6359d.appspot.com",
  messagingSenderId: "645462773671",
  appId: "1:645462773671:web:7648cf95a13bd1b6c1b082",
  measurementId: "G-QJD571X509",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };

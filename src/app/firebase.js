import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDSXrN1XirwzUgQApw_IqzKtFyJEG9xFQE",
    authDomain: "linkedin-clone-9d7dc.firebaseapp.com",
    projectId: "linkedin-clone-9d7dc",
    storageBucket: "linkedin-clone-9d7dc.appspot.com",
    messagingSenderId: "1098299691926",
    appId: "1:1098299691926:web:9c1bde262ace5c7a2c03b7",
    measurementId: "G-R64BLSCZ57"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth } 
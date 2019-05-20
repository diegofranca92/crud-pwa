import firebase from 'firebase'

  // Your web app's Firebase configuration
  let firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };
  // Initialize Firebase
  let app = firebase.initializeApp(firebaseConfig)
  export const db = app.database()

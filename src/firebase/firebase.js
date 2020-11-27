import firebase from 'firebase'
import 'firebase/storage'

//https://www.npmjs.com/package/firebase how to use firebase npm package
//https://bezkoder.com/react-firebase-crud/
//https://medium.com/@thevatsalsaglani/working-with-firebase-real-time-database-using-reactjs-and-uikit-and-launching-to-netlify-ff92419289b2

 var firebaseConfig = {
    apiKey: "AIzaSyC6qfX4TjQbcutxF_DxpbuHze0rhk2gKb8",
    authDomain: "incut-employee-onboard.firebaseapp.com",
    databaseURL: "https://incut-employee-onboard.firebaseio.com",
    projectId: "incut-employee-onboard",
    storageBucket: "incut-employee-onboard.appspot.com",
    messagingSenderId: "872224518379",
    appId: "1:872224518379:web:e77eeb98fc6ef26cd50eae"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage()
  const database = firebase.database()
  const firestore = firebase.firestore()
  
  export  {
    firestore,database,storage, firebase as default
  }
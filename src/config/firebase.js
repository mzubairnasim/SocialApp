import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDmQ4aMQF1lQBMdtGBsBP_uvTdaPMpXGA4",
    authDomain: "instagram-clone-fe846.firebaseapp.com",
    databaseURL: "https://instagram-clone-fe846.firebaseio.com",
    projectId: "instagram-clone-fe846",
    storageBucket: "instagram-clone-fe846.appspot.com",
    messagingSenderId: "655037987844",
    appId: "1:655037987844:web:3befaa0868acd2eb410951"
  };
  // Initialize Firebase
 const firebaseApp=firebase.initializeApp(firebaseConfig);

 const db=firebaseApp.firestore()
 const auth=firebase.auth()
 const storage=firebase.storage()

 export {db,auth,storage}
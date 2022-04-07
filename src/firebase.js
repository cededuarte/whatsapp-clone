import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
const firebaseConfig = {
      apiKey: "AIzaSyC8kFflyDxNLTmmdl29gfW9iqbOtOiwjnQ",
      authDomain: "whatsapp-clone-339aa.firebaseapp.com",
      projectId: "whatsapp-clone-339aa",
      storageBucket: "whatsapp-clone-339aa.appspot.com",
      messagingSenderId: "952551275458",
      appId: "1:952551275458:web:76a1d0d53835cbd28f745b",
      measurementId: "G-5XTC14PJYW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;

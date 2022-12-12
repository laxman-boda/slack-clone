import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA-xX66JqClGoyUd5WweaBtT_qfh7AIchw",
    authDomain: "slack-clone-8bcde.firebaseapp.com",
    projectId: "slack-clone-8bcde",
    storageBucket: "slack-clone-8bcde.appspot.com",
    messagingSenderId: "1046088625631",
    appId: "1:1046088625631:web:2db922d98172bebdb5286a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, db,provider }
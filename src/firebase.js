import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCGLJ-QI21XVqmha-_ld-FziyDZ_LRXk6Q",
    authDomain: "clone-personal-project-4d9af.firebaseapp.com",
    projectId: "clone-personal-project-4d9af",
    storageBucket: "clone-personal-project-4d9af.appspot.com",
    messagingSenderId: "515689684792",
    appId: "1:515689684792:web:d823c2739b90af68242bcd",
    measurementId: "G-R853TZHH28"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };


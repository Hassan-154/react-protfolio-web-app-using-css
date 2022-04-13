import firebase from "firebase";
var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDKYGiU5u_0QN4svXnGG4dB7kQplrgV888",
    authDomain: "contact-form-a46a1.firebaseapp.com",
    projectId: "contact-form-a46a1",
    storageBucket: "contact-form-a46a1.appspot.com",
    messagingSenderId: "829867020399",
    appId: "1:829867020399:web:48f88dd62445d1c514bd9a"
});

var db = firebaseApp.firestore();

export { db };
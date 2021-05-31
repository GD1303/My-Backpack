import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyAfEbTLJQBIR1ax4NApBnpVSQOtBe98XJ0",
    authDomain: "my-backpack-pika.firebaseapp.com",
    projectId: "my-backpack-pika",
    storageBucket: "my-backpack-pika.appspot.com",
    messagingSenderId: "537272193944",
    appId: "1:537272193944:web:0e4b4094e2dee6f05691ed"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
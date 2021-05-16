import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCAAPXkp8cUIt6wtQU9kAzq2vKMyk7JVKw",
    authDomain: "bks6-d28e5.firebaseapp.com",
    projectId: "bks6-d28e5",
    storageBucket: "bks6-d28e5.appspot.com",
    messagingSenderId: "904606272023",
    appId: "1:904606272023:web:9e75b3e9f1013798982a52"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
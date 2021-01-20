import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyDNWIKWs6jYU8f1kicHurIqjwTTyeo9ixg",
    authDomain: "story-hub-e50ca.firebaseapp.com",
    projectId: "story-hub-e50ca",
    storageBucket: "story-hub-e50ca.appspot.com",
    messagingSenderId: "892187293072",
    appId: "1:892187293072:web:b169913f6812d6f5026f15"
  };

  firebase.initializeApp(firebaseConfig);

export default  firebase.firestore() 
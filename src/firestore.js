import firebase from 'firebase'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyBVMm_4WXjGwAfxrF3fY2epzxAg9xd4eiI",
    authDomain: "counter-fb.firebaseapp.com",
    databaseURL: "https://counter-fb.firebaseio.com",
    projectId: "counter-fb",
    storageBucket: "counter-fb.appspot.com",
    messagingSenderId: "527098427472"
  };

firebase.initializeApp(config);
const db = firebase.firestore();
export default db;
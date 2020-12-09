import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyB_iFUwKN72hRXN_-AXnsIQi3Zc2WMG5p0",
  authDomain: "hmc-app-196d4.firebaseapp.com",
  databaseURL: "https://hmc-app-196d4-default-rtdb.firebaseio.com",
  projectId: "hmc-app-196d4",
  storageBucket: "hmc-app-196d4.appspot.com",
  messagingSenderId: "726537101514",
  appId: "1:726537101514:web:dfc8900c1434f2967d5433",
  measurementId: "G-TVX2F8Q2B6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  export default firebase;
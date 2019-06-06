import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBFwtt8xVJGn72w3ahfZZNbic9eb5SsJxo",
  authDomain: "burger-queen-001.firebaseapp.com",
  databaseURL: "https://burger-queen-001.firebaseio.com",
  projectId: "burger-queen-001",
  storageBucket: "burger-queen-001.appspot.com",
  messagingSenderId: "1066800103541",
  appId: "1:1066800103541:web:f1b38d4821029b25"
};

firebase.initializeApp(config);

export default firebase;
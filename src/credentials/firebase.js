import firebase from "firebase";
import "firebase/firestore";

var config = {
  apiKey: "AIzaSyCqeYNmMsqwTHa6IMBk6jVQ6UlEIkE13n4",
  authDomain: "barchat-72a93.firebaseapp.com",
  projectId: "barchat-72a93",
  storageBucket: "barchat-72a93.appspot.com",
  messagingSenderId: "1026300077508",
  appId: "1:1026300077508:web:b453442aa10ac5f740f091",
  measurementId: "G-M0F1G4Z22Q",
};

var fire = firebase.initializeApp(config);
export default fire;

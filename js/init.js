// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiHfzM4LCXa6HfxMkk1G8JKTAn3-8CfoU",
  authDomain: "iticfire801jcu.firebaseapp.com",
  projectId: "iticfire801jcu",
  storageBucket: "iticfire801jcu.appspot.com",
  messagingSenderId: "887933760440",
  appId: "1:887933760440:web:aa267c0e003c28699d154d",
  measurementId: "G-H3F308Y0J0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

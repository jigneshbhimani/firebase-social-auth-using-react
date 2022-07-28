import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDEin-ys4KyJEEO-ak40ZcXa2wmIslcgB4",
  authDomain: "fir-social-login-vuejs.firebaseapp.com",
  projectId: "fir-social-login-vuejs",
  storageBucket: "fir-social-login-vuejs.appspot.com",
  messagingSenderId: "646577979672",
  appId: "1:646577979672:web:4d457b73677d1115591e6d",
  measurementId: "G-X1KYEMFVYL",
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;

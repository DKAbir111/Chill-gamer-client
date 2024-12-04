// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlt3nGXssYOLKiDoDGTc6evWsVVkywju8",
    authDomain: "chill-gamer-59231.firebaseapp.com",
    projectId: "chill-gamer-59231",
    storageBucket: "chill-gamer-59231.firebasestorage.app",
    messagingSenderId: "26308765741",
    appId: "1:26308765741:web:b5131b422473e7b4a230a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
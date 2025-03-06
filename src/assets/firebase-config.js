// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyC-7d-a8PUBLZ2q24boyXLqyWja6_VlIno",
	authDomain: "market-37aca.firebaseapp.com",
	projectId: "market-37aca",
	storageBucket: "market-37aca.firebasestorage.app",
	messagingSenderId: "508965363988",
	appId: "1:508965363988:web:bdcd96afc1acf563cbe201"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth }
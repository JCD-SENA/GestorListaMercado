import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyC-7d-a8PUBLZ2q24boyXLqyWja6_VlIno",
	authDomain: "market-37aca.firebaseapp.com",
	projectId: "market-37aca",
	storageBucket: "market-37aca.firebasestorage.app",
	messagingSenderId: "508965363988",
	appId: "1:508965363988:web:bdcd96afc1acf563cbe201"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export { auth, db }
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

import { auth } from "../assets/firebase-config"

export const createUserEmailPass = (email, password, successCallback, errorCallback) => {
	createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
		successCallback(userCredential.user)
	}).catch((error) => {
		errorCallback(error.code, error.message)
	});
}

export const login = (email, password, successCallback, errorCallback) => {
	signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
		successCallback(userCredential.user)
	}).catch((error) => {
		errorCallback(error.code, error.message)
	});
}
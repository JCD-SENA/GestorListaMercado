import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"

import { auth } from "../assets/firebase-config"

const googleProvider = new GoogleAuthProvider()

export const loginGoogle = (successCallback, errorCallback) => {
	signInWithPopup(auth, googleProvider).then((res) => {
		successCallback(res.user)
	}).catch((error) => {
		errorCallback(error.code, error.message)
	})
}
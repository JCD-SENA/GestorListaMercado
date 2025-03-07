import { signInWithPopup, GithubAuthProvider } from "firebase/auth"

import { auth } from "../assets/firebase-config"

const githubProvider = new GithubAuthProvider()

export const loginGithub = (successCallback, errorCallback) => {
	signInWithPopup(auth, githubProvider).then((res) => {
		successCallback(res.user)
	}).catch((error) => {
		errorCallback(error.code, error.message)
	})
}
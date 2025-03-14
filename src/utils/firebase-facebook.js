import { FacebookAuthProvider, signInWithPopup, getAuth } from "firebase/auth"

import { auth } from "../assets/firebase-config"

const provider = new FacebookAuthProvider()

export const loginFacebook = (successCallback, errorCallback) => {
    provider.setCustomParameters({
        'display': 'popup'
    });
    signInWithPopup(getAuth(), provider).then((res) => {
        successCallback(res.user)
    }).catch((error) => {
        errorCallback(error.code, error.message)
    })
}
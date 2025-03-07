import { useContext } from "react"
import { signOut } from "firebase/auth"

import { sessionContext } from "../../context/SessionContext"
import { auth } from "../../assets/firebase-config"

export const CloseSession = () => {
	const { setSession, session } = useContext(sessionContext)

	const sessionClose = () => {
		delete localStorage.session
		signOut(auth).then(() => {
			setSession(undefined)
		})
	}

	return (<span className="text-yellow-500 font-bold absolute top-1 right-2 p-2" onClick={sessionClose}>Cerrar sesión</span>)
}
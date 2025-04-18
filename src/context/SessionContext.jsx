import { getAuth } from "firebase/auth"
import { createContext, useState } from "react"
import { auth } from "../assets/firebase-config"

export const sessionContext = createContext()

export const SessionContextHandler = ({ children }) => {
	const [session, setSession] = useState()
	const [logOrSignIn, setLogOrSignIn] = useState("sign")

	return (
		<sessionContext.Provider value={{
			session, setSession,
			logOrSignIn, setLogOrSignIn
		}}>
			{children}
		</sessionContext.Provider>
	)
}
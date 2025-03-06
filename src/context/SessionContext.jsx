import { createContext, useState } from "react"

export const sessionContext = createContext()

export const SessionContextHandler = ({ children }) => {
	const [session, setSession] = useState()
	return (
		<sessionContext.Provider value={{
			session, setSession
		}}>
			{children}
		</sessionContext.Provider>
	)
}
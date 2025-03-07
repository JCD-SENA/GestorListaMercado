import { useContext } from "react"

import { loginGoogle } from "../../../utils/firebase-google"
import { sessionContext } from "../../../context/SessionContext"

export const Google = () => {
	const { setSession } = useContext(sessionContext)

	const handleSession = () => {
		loginGoogle((user) => {
			setSession(user)
		}, (errorCode, errorMessage) => {
			console.log(errorCode, errorMessage)
		})
	}

	return (
		<button onClick={handleSession} className="bg-white p-2 w-40 m-2 rounded-xl">
			<span className="text-blue-600">G</span>
			<span className="text-red-600">o</span>
			<span className="text-yellow-500">o</span>
			<span className="text-blue-600">g</span>
			<span className="text-green-600">l</span>
			<span className="text-red-600">e</span>
		</button>
	)
}
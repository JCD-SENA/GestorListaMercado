import { useContext } from "react"

import { sessionContext } from "../../../context/SessionContext"
import { loginGithub } from "../../../utils/firebase-github"

export const Github = ({}) => {
	const { setSession } = useContext(sessionContext)

	const handleSession = () => {
		loginGithub((user) => {
			setSession(user)
		}, (errorCode, errorMessage) => {
			console.log(errorCode, errorMessage)
		})
	}

	return (
		<button onClick={handleSession} className="text-white p-2 w-40 mb-2 bg-gray-600 rounded-xl max-md:w-90 max-md:text-lg">Github</button>
	)
}
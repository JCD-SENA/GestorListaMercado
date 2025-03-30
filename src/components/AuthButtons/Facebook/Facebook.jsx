import { loginFacebook } from "../../../utils/firebase-facebook"

export const Facebook = ({}) => {
	const handleSession = () => {
		loginFacebook((user) => {
			setSession(user)
		}, (errorCode, errorMessage) => {
			console.log(errorCode, errorMessage)
		})
	}

	return (
		<button className="text-white p-2 w-40 mb-2 bg-sky-950 rounded-xl max-md:w-90 max-md:text-lg" onClick={handleSession}>Facebook</button>
	)
}
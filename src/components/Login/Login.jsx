import { useForm } from "react-hook-form"
import { useContext } from "react"

import { styles } from "../../assets/styles"

import { InputForm } from "../FormMarket/InputForm/InputForm"
import { sessionContext } from "../../context/SessionContext"
import { login } from "../../utils/firebase-email"

import { Google } from "../AuthButtons/Google/Google"
import { Github } from "../AuthButtons/Github/Github"
import { Facebook } from "../AuthButtons/Facebook/Facebook"

export const Login = () => {
	const { setSession, setLogOrSignIn } = useContext(sessionContext)
	const {register, handleSubmit, formState: {errors}, reset } = useForm()

	const handleLogin = (credientials) => {
		login(credientials.email, credientials.password, (finalUser) => {
			setSession(finalUser)
		}, (errorCode, errorMessage) => {
			console.log(errorCode, errorMessage)
		})
		reset()
	}

	return (
		<section className={styles.sectionStyle+" w-100 "}>
			<h2 className="mb-1 font-bold mt-1">Iniciar sesión</h2>
			<form onSubmit={handleSubmit(handleLogin)} className="flex-col flex w-full">
				<InputForm
					name="email"
					placeholder="Email del usuario"
					type="email"
					form={{register: register, errors: errors}}
					register={{
						required: "Se debe ingresar un email"
					}}
				/>
				<InputForm
					name="password"
					placeholder="La contraseña del usuario"
					type="password"
					form={{register: register, errors: errors}}
					register={{
						required: "Se debe ingresar una contraseña",
						minLength: {
							value: 6,
							message: "La contraseña debe ser 6 caracteres minimo"
						}
					}}
				/>
				<input type="submit" className={styles.submitStyle} value="Registrase"/>
			</form>
			<div className="flex-col flex w-full items-center">
				o iniciar sesión con
				<Google/>
				<Github/>
				<Facebook/>
			</div>
			<div className="mt-4 mb-4">
				¿No tienes una cuenta? <span className="text-yellow-500 font-bold" onClick={() => setLogOrSignIn("sign")}>Registrarse</span>
			</div>
		</section>
	)
}
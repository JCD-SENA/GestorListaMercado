import { auth } from "../../assets/firebase-config"
import { useForm } from "react-hook-form"
import { useContext } from "react"

import { createUserEmailPass } from "../../utils/firebase-email"

import { styles, responsive } from "../../assets/styles"
import { InputForm } from "../FormMarket/InputForm/InputForm"
import { sessionContext } from "../../context/SessionContext"

import { Google } from "../AuthButtons/Google/Google"
import { Github } from "../AuthButtons/Github/Github"
import { Facebook } from "../AuthButtons/Facebook/Facebook"

export const Register = () => {
	const { setSession, setLogOrSignIn } = useContext(sessionContext)
	const {register, handleSubmit, formState: {errors}, reset, getValues } = useForm()

	const handleRegister = (user) => {
		createUserEmailPass(user.email, user.password, (finalUser) => {
			setSession(finalUser)
		}, (errorCode, errorMessage) => {
			console.log(errorCode, errorMessage)
		})
		reset()
	}

	return (
		<section className={`${styles.sectionStyle} ${responsive.form}`}>
			<h2 className={styles.sectionTitle}>Registrarse</h2>
			<form onSubmit={handleSubmit(handleRegister)} className="flex-col flex w-full">
				<InputForm
					name="username"
					placeholder="El nombre de usuario"
					type="text"
					form={{register: register, errors: errors}}
					register={{
						required: "Se debe ingresar un nombre al usuario"
					}}
				/>
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
				<InputForm
					name="passwordConfirm"
					placeholder="Confirmar la contraseña"
					type="password"
					form={{register: register, errors: errors}}
					register={{
						required: "Se debe confirmar la contraseña",
						validate: (value) => {
							return value == getValues("password") || "Ambas contraseñas deben ser iguales"
						}
					}}
				/>
				<input type="submit" className={styles.submitStyle} value="Registrase"/>
			</form>
			<div className="flex-col flex w-full items-center">
				o registrarse con
				<Google/>
				<Github/>
				<Facebook/>
			</div>
			<div className="mt-4 mb-4">
				¿Ya tienes una cuenta? <span className="text-yellow-500 font-bold" onClick={() => setLogOrSignIn("log")}>Inicia sesión</span>
			</div>
		</section>
	)
}
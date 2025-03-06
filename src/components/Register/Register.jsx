import { auth } from "../../assets/firebase-config"
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth"
import { useForm } from "react-hook-form"

import { styles } from "../../assets/styles"
import { InputForm } from "../FormMarket/InputForm/InputForm"

export const Register = () => {
	const {register, handleSubmit, formState: {errors}, reset, getValues } = useForm()

	const handleRegister = (user) => {
		console.log(user)
	}

	return (
		<section className={styles.sectionStyle}>
			<h2 className="mb-1 font-bold">Registrarse</h2>
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
						required: "Se debe ingresar una contraseña"
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
		</section>
	)
}
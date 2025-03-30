import emailjs from "@emailjs/browser"

import { useContext, useEffect } from "react"
import { useForm } from "react-hook-form"

import { MarketContext } from "../../context/MarketContext"
import { styles } from "../../assets/styles"
import { InputForm } from "../FormMarket/InputForm/InputForm"

export const HelpForm = () => {
	const { setChartMode } = useContext(MarketContext)
	const {register, handleSubmit, formState: {errors} } = useForm()

	const handleContact = (contactInfo) => {
		emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, {
			name: contactInfo.name,
			subject: contactInfo.subject,
			message: contactInfo.content,
			email: contactInfo.email
		}, import.meta.env.VITE_PUBLIC_KEY)
	}

	useEffect(() => {
		emailjs.init(import.meta.env.PUBLIC_KEY)
	}, []);
	
	return (
		<div className="flex flex-col items-center">
			<section className={`${styles.sectionStyle} max-md:w-screen max-md:min-h-1/3 md:w-90`}>
				<form onSubmit={handleSubmit(handleContact)} className="flex-col flex w-full">
					<InputForm 
						name="name"
						type="text"
						register={{
							required: "Se debe ingresar su nombre",
							minLength: {
								value: 3,
								message: "El nombre tiene que ser más largo"
							}
						}}
						placeholder="Ingrese aquí su nombre"
						label="Nombre"
						form={{register: register, errors: errors}}
					/>
					<InputForm 
						name="email"
						type="email"
						placeholder="Ingrese aquí el email"
						label="email"
						form={{register: register, errors: errors}}
					/>
					<InputForm 
						name="subject"
						type="text"
						placeholder="Ingrese aquí el asunto"
						label="Asunto"
						register={{
							minLength: {
								value: 10,
								message: "Se debe ingresar un asunto más largo"
							}
						}}
						form={{register: register, errors: errors}}
					/>
					<textarea {...register("content", {
						minLength: {
							value: 30,
							message: "Por favor, elabora más sobre tu problema."
						}
					})} className="bg-sky-950 rounded-xl mt-4 mb-4 placeholder:text-cyan-800 text-white p-2 max-h-100 resize-y" placeholder="Dinos tu problema"/>
					{errors["content"] && (<span className="text-red-500 italic">{errors["content"].message}</span>)}
					<input type="submit" className={styles.submitStyle} value="Enviar"/>
				</form>
			</section>
			<a className="font-bold text-yellow-500 m-2" onClick={() => setChartMode("")}>Regresar</a>
		</div>
	)
}
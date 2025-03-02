export const InputForm = ({ name, type, register, label, placeholder, form }) => {
	return (
		<>
			<label className="text-yellow-500 font-bold text-center">{label}</label>
			<input 
				{...form.register(name, register)}
				className="bg-sky-950 p-2 w-auto m-2 rounded-xl text-white placeholder:text-cyan-800"
				name={name}
				placeholder={placeholder}
				type={type}
			></input>
			{form.errors[name] && (<span className="text-red-500 italic">{form.errors[name].message}</span>)}
		</>
	)
}
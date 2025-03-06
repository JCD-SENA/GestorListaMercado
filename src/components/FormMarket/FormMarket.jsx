import { useContext, useState } from "react"
import { useForm } from "react-hook-form"

import { MarketContext } from "../../context/MarketContext"
import { InputForm } from "./InputForm/InputForm"

export const FormMarket = () => {
	const {setListProduct, listProduct, sectionStyle, editMode, setEditMode } = useContext(MarketContext)

	const {register, handleSubmit, formState: {errors}, reset, getValues } = useForm()

	const handleAddedProduct = (product) => {
		if (product.shop == "")
			product.shop = "Otro"
		if (product.category == "")
			product.category = "Otro"
		setListProduct([...listProduct, product])
		reset()
	}

	return (
		<section className={sectionStyle+" w-1/3 "}>
			<h2 className="mb-1 font-bold">{editMode ? "Editar producto" : "Agregar productos"}</h2>
			<form onSubmit={handleSubmit(handleAddedProduct)} className="flex-col flex w-full">
				<InputForm 
					name="name"
					type="text"
					register={{required: "Se debe ingresar el nombre del producto"}}
					placeholder="Nombre del producto"
					label="nombre"
					form={{register: register, errors: errors}}
				/>
				<InputForm 
					name="price"
					type="number"
					register={{
						required: "Se debe ingresar el precio del producto",
						valueAsNumber: true
					}}
					placeholder="Precio del producto"
					label="Precio"
					form={{register: register, errors: errors}}
				/>
				<InputForm 
					name="shop"
					type="text"
					placeholder="Tienda en la que se compró"
					label="Tienda"
					form={{register: register, errors: errors}}
				/>
				<InputForm 
					name="measurement"
					type="text"
					placeholder="La unidad de medida del producto"
					label="Unidad de medida"
					form={{register: register, errors: errors}}
				/>
				<InputForm 
					name="category"
					type="text"
					placeholder="La categoría del producto"
					label="Categoría"
					form={{register: register, errors: errors}}
				/>
				<input type="submit" className="bg-yellow-500 p-2 w-auto m-2 rounded-xl text-white" value={editMode ? "Editar producto" : "Agregar a la lista"}/>
			</form>
		</section>
	)
}
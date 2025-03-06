import { useContext, useEffect, useState } from "react"
import { useForm } from "react-hook-form"

import { MarketContext } from "../../context/MarketContext"
import { InputForm } from "./InputForm/InputForm"
import { styles } from "../../assets/styles"

export const FormMarket = () => {
	const {setListProduct, listProduct, sectionStyle, editMode, setEditMode, currentlyEditing } = useContext(MarketContext)

	const {register, handleSubmit, formState: {errors}, reset, setValue } = useForm()

	const handleAddedProduct = (product) => {
		if (editMode) {
			const newListProduct = [...listProduct]
			newListProduct[currentlyEditing[1]].name = product.name
			newListProduct[currentlyEditing[1]].price = product.price
			newListProduct[currentlyEditing[1]].shop = product.shop
			newListProduct[currentlyEditing[1]].measurement = product.measurement
			newListProduct[currentlyEditing[1]].category = product.category
			setListProduct(newListProduct)
			setEditMode(false)
		} else {
			if (product.shop == "")
				product.shop = "Otro"
			if (product.category == "")
				product.category = "Otro"
			setListProduct([...listProduct, product])
		}
		reset()
	}

	useEffect(() => {
		if (currentlyEditing) {
			setValue("name", currentlyEditing[0].name)
			setValue("price", currentlyEditing[0].price)
			setValue("shop", currentlyEditing[0].shop)
			setValue("measurement", currentlyEditing[0].measurement)
			setValue("category", currentlyEditing[0].category)
		}
	}, [currentlyEditing])

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
				<input type="submit" className={styles.submitStyle} value={editMode ? "Editar producto" : "Agregar a la lista"}/>
			</form>
		</section>
	)
}
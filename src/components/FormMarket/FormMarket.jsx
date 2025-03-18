import { useContext, useEffect, useState } from "react"
import { useForm } from "react-hook-form"

import { createProduct, updteProduct, getProducts } from "../../utils/firebase-db"
import { MarketContext } from "../../context/MarketContext"
import { sessionContext } from "../../context/SessionContext"
import { InputForm } from "./InputForm/InputForm"
import { styles } from "../../assets/styles"

export const FormMarket = () => {
	const {setListProduct, dateProduct, editMode, setEditMode, currentlyEditing } = useContext(MarketContext)
	const {session} = useContext(sessionContext)

	const {register, handleSubmit, formState: {errors}, reset, setValue } = useForm()

	const handleAddedProduct = (product) => {
		if (editMode) {
			updteProduct(currentlyEditing[1], {
				name: product.name,
				price: product.price,
				shop: product.shop,
				measurement: product.measurement,
				category: product.category,
				brand: product.brand
			})
			getProducts(session.uid, setListProduct)
			setEditMode(false)
		} else {
			if (product.shop == "")
				product.shop = "Otro"
			if (product.category == "")
				product.category = "Otro"
			if (product.brand == "")
				product.brand = "N/A"
			
			if (product.date)
				product.date = Date.parse(product.date)
			else
				product.date = Date.now()
			product.user = session.uid
			getProducts(session.uid, setListProduct)
			createProduct(product)
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
			setValue("brand", currentlyEditing[0].brand)
		}
	}, [currentlyEditing])

	return (
		<section className={styles.sectionStyle+" w-1/3 "}>
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
					name="brand"
					type="text"
					form={{register: register, errors: errors}}
					placeholder="Marca del producto"
					label="Marca"
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
				<InputForm
					name="date"
					type="date"
					placeholder="Ingresar una fecha especifica"
					label="Fecha"
					form={{register: register, errors: errors}}
				/>
				<input type="submit" className={styles.submitStyle} value={editMode ? "Editar producto" : "Agregar a la lista"}/>
			</form>
		</section>
	)
}
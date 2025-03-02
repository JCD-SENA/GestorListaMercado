import { useContext, useState } from "react"
import { useForm } from "react-hook-form"

import { MarketContext } from "../../context/MarketContext"

export const FormMarket = () => {
	const inputStyle = "bg-sky-950 p-2 w-auto m-2 rounded-xl text-white placeholder:text-cyan-800"
	const labelStyle = "text-yellow-500 font-bold text-center"
	const errorLabelStyle = "text-red-500 italic"

	const {setListProduct, listProduct, sectionStyle } = useContext(MarketContext)

	const {register, handleSubmit, formState: {errors}, reset, getValues } = useForm()

	const handleAddedProduct = (product) => {
		if (product.shop == "")
			product.shop = "Otro"
		setListProduct([...listProduct, product])
		reset()
	}

	return (
		<section className={sectionStyle}>
			<h2 className="mb-1 font-bold">Agregar productos</h2>
			<form onSubmit={handleSubmit(handleAddedProduct)} className="flex-col flex w-full">
				<label className={labelStyle}>Nombre</label>
				<input {...register("name", {
					required: "Se debe ingresar el nombre del producto"
				})} className={inputStyle} name="name" placeholder="Nombre del producto"></input>
				{errors.name && (<span className={errorLabelStyle}>{errors.name.message}</span>)}
				<label className={labelStyle}>Precio</label>
				<input {...register("price", {
					required: "Se debe ingresar el precio del producto",
					valueAsNumber: true
				})} className={inputStyle} name="price" type="number" placeholder="Precio del producto"></input>
				{errors.price && (<span className={errorLabelStyle}>{errors.price.message}</span>)}
				<label className={labelStyle}>Tienda</label>
				<input {...register("shop")} className={inputStyle} name="shop" placeholder="Tienda en la que se compró"></input>
				{errors.shop && (<span className={errorLabelStyle}>{errors.shop.message}</span>)}
				<input type="submit" className="bg-yellow-500 p-2 w-auto m-2 rounded-xl text-white" value="Agregar a la lista"></input>
			</form>
		</section>
	)
}
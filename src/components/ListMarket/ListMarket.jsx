import React, { useEffect, useContext, useState } from "react"

import { MarketContext } from "../../context/MarketContext"
import { Product } from "./Product/Product"

export const ListMarket = () => {
	const { listProduct, setTotalPrice, dateProduct, totalPrice, sectionStyle } = useContext(MarketContext)

	const [filter, setFilter] = useState("")

	let filteredList = listProduct

	useEffect(() => {
		listProduct.forEach((p) => {
			setTotalPrice(totalPrice + p.price)
		})
	}, [listProduct])

	useEffect(() => {
		if (filter == "minName" || filter == "maxName" || filter == "minPrice" || filter == "maxPrice") {
			filteredList.sort((a, b) => {
				if (filter == "minName")
					return a.name[0] < b.name[0] ? 1 : -1
				if (filter == "maxName")
					return a.name[0] > b.name[0] ? 1 : -1
				if (filter == "minPrice")
					return a.price < b.price ? 1 : -1
				if (filter == "maxPrice")
					return a.price > b.price ? 1 : -1
			})
		}
	}, [filter])

	return (<>
		<section className={sectionStyle}>
			<h2 className="mb-1 font-bold">Lista de productos</h2>
			<h3>({dateProduct})</h3>
			<span className="text-center"><span onClick={() => {
				if (filter == "minName")
					setFilter("maxName")
				else
					setFilter("minName")
			}} className="font-bold">Nombre {filter == "minName" ? "⮟" : (filter == "maxName" ? "⮝" : "")}</span> | <span className="font-bold" onClick={() => {
				if (filter == "minPrice")
					setFilter("maxPrice")
				else
					setFilter("minPrice")
			}}>Precio {filter == "minPrice" ? "⮟" : (filter == "maxPrice" ? "⮝" : "")}</span></span>
			<ul className="flex-col flex w-full p-2 bg-sky-950 m-2 rounded-xl">
				{
					filteredList.map((p, i) => (
						<Product key={p+i} position={i} productData={p}/>
					))
				}
			</ul>
			<h2 className="font-bold">Total: {totalPrice}$</h2>
		</section>
	</>)
}
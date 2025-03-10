import React, { useEffect, useContext, useState } from "react"

import { styles } from "../../assets/styles"
import { MarketContext } from "../../context/MarketContext"
import { sessionContext } from "../../context/SessionContext"
import { Product } from "./Product/Product"
import { getProducts } from "../../utils/firebase-db"

export const ListMarket = () => {
	const { listProduct, setListProduct, setTotalPrice, dateProduct, totalPrice, sectionStyle } = useContext(MarketContext)
	const { session } = useContext(sessionContext)

	const [filter, setFilter] = useState("")

	let filteredList = listProduct

	if (listProduct.length < 1)
		getProducts(session.uid, setListProduct)

	useEffect(() => {
		if (listProduct.length > 0) {
			setTotalPrice(listProduct.map((product) => {
				return product.price
			}).reduce((pv, nv) => pv + nv))	
		}
	}, [listProduct])

	useEffect(() => {
		filteredList.sort((a, b) => {
			switch (filter) {
				case "minName": return a.name[0] < b.name[0] ? 1 : -1 ; break
				case "maxName": return a.name[0] > b.name[0] ? 1 : -1 ; break
				case "minStore": return a.shop[0] < b.shop[0] ? 1 : -1 ; break
				case "maxStore": return a.shop[0] > b.shop[0] ? 1 : -1 ; break 
				case "minMeasure": return a.measurement[0] < b.measurement[0] ? 1 : -1 ; break
				case "maxMeasure": return a.measurement[0] > b.measurement[0] ? 1 : -1 ; break
				case "minPrice": return a.price < b.price ? 1 : -1 ; break
				case "maxPrice": return a.price > b.price ? 1 : -1 ; break
				case "minCategory": return a.category[0] < b.category[0] ? 1 : -1 ; break
				case "maxCategory": return a.category[0] > b.category[0] ? 1 : -1 ; break
			}
		})
	}, [filter])

	return (<>
		<section className={styles.sectionStyle+" w-3/6 "}>
			<h2 className="mb-1 font-bold">Lista de productos</h2>
			<h3>({dateProduct})</h3>
			{/* Poner aquí un combox con los meses sería interesante */}
			<table className="bg-sky-950 m-2 rounded-xl w-full">
				<thead>
					<tr className="text-yellow-500">
						<th></th>
						<th className="p-1" onClick={() => setFilter(filter == "minName" ? "maxName" : "minName")}>Nombre</th>
						<th className="p-1" onClick={() => setFilter(filter == "minStore" ? "maxStore" : "minStore")}>Tienda</th>
						<th className="p-1" onClick={() => setFilter(filter == "minPrice" ? "maxPrice" : "minPrice")}>Precio</th>
						<th className="p-1" onClick={() => setFilter(filter == "minMeasure" ? "maxMeasure" : "minMeasure")}>Unidad de medida</th>
						<th className="p-1" onClick={() => setFilter(filter == "minCategory" ? "maxCategory" : "minCategory")}>Categoría</th>
					</tr>
				</thead>
				<tbody>
					{
						filteredList.map((p, i) => (
							<Product key={p.id} position={p.id} productData={p}/>
						))
					}
				</tbody>
			</table>
			<h2 className="font-bold">Total: {totalPrice}$</h2>
		</section>
	</>)
}
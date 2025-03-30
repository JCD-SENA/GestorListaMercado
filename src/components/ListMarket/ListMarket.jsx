import React, { useEffect, useContext, useState } from "react"

import { styles } from "../../assets/styles"
import { MarketContext } from "../../context/MarketContext"
import { sessionContext } from "../../context/SessionContext"
import { Product } from "./Product/Product"
import { getProducts } from "../../utils/firebase-db"
import { CategorySelect } from "../CategorySelect/CategorySelect"
import { DateSelect } from "../DateSelect/DateSelect"

export const ListMarket = () => {
	const { listProduct, setListProduct, setTotalPrice, dateProduct, totalPrice, categoryFilter, month, setMonth, setChartMode } = useContext(MarketContext)
	const { session } = useContext(sessionContext)

	const [filter, setFilter] = useState("")

	let filteredList = listProduct

	useEffect(() => {
		getProducts(session.uid, setListProduct)
	}, [session])

	useEffect(() => {
		if (listProduct.length > 0) {
			setTotalPrice(listProduct.filter(listFilter).map((product) => {
				return product.status == "activo" ? product.price : 0
			}).reduce((pv, nv) => pv + nv))	
		}
	}, [listProduct, categoryFilter, month])

	const listFilter = (product) => {
		if (categoryFilter != "*" || !categoryFilter)
			return product.category == categoryFilter
		else 
			return `${product.date.getMonth() + 1}/${product.date.getFullYear()}` == month
	}

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
				case "maxBrand": return a.brand[0] > b.brand[0] ? 1 : -1 ; break
				case "minBrand": return a.brand[0] < b.brand[0] ? 1 : -1 ; break
			}
		})
	}, [filter])

	return (<>
		<section className={`${styles.sectionStyle} md:w-3/6 max-md:w-screen mt-5`}>
			<h2 className="mb-1 font-bold">Lista de productos</h2>
			<h3>({dateProduct})</h3>
			<a className="font-bold text-yellow-500" onClick={() => setChartMode("comparation")}>Comparar meses</a>
			<div className="max-md:flex max-md:flex-col">
				<CategorySelect/>
				<DateSelect onChangeFunction={setMonth} month={month}/>
			</div>
			<table className={`${styles.tableStlye} max-md:sr-only`}>
				<thead>
					<tr className="text-yellow-500">
						<th></th>
						<th className="p-1" onClick={() => setFilter(filter == "minName" ? "maxName" : "minName")}>Nombre</th>
						<th className="p-1" onClick={() => setFilter(filter == "minBrand" ? "maxBrand" : "minBrand")}>Marca</th>
						<th className="p-1" onClick={() => setFilter(filter == "minStore" ? "maxStore" : "minStore")}>Tienda</th>
						<th className="p-1" onClick={() => setFilter(filter == "minPrice" ? "maxPrice" : "minPrice")}>Precio</th>
						<th className="p-1" onClick={() => setFilter(filter == "minMeasure" ? "maxMeasure" : "minMeasure")}>Unidad de medida</th>
						<th className="p-1" onClick={() => setFilter(filter == "minCategory" ? "maxCategory" : "minCategory")}>Categoría</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{
						filteredList.filter(listFilter).map((p, i) => (
							<Product key={p.id} position={p.id} productData={p}/>
						))
					}
				</tbody>
			</table>
			<div className="md:sr-only">
				{filteredList.filter(listFilter).map((p, i) => (
					<Product key={p.id} position={p.id} productData={p}/>
				))}
			</div>
			<h2 className="font-bold m-1">Total del mes: {totalPrice}$</h2>
			<a className="font-bold text-yellow-500" onClick={() => setChartMode("summary")}>Ver gastos por mes</a>
		</section>
	</>)
}
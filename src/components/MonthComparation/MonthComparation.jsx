import { useContext, useState } from "react"

import { styles } from "../../assets/styles"
import { MarketContext } from "../../context/MarketContext"
import { DateSelect } from "../DateSelect/DateSelect"

export const MonthComparation = () => {
	const { setChartMode, listProduct, month } = useContext(MarketContext)
	const [month1, setMonth1] = useState(month)
	const [month2, setMonth2] = useState(month)

	//No estoy seguro que estaba haciendo en este punto, mi otro codigo es considerablemente mejor
	const getProductMonth = (selectedMonth) => {
		let productsList = []
		listProduct.forEach((product) => {
			if (`${product.date.getMonth() + 1}/${product.date.getFullYear()}` == selectedMonth && product.status == "activo") {
				productsList.push(product)
			}
		})
		return productsList
	}

	const appearsOtherMonth = (product, monthList) => {
		let res = false
		monthList.forEach((otherProduct) => {
			if (otherProduct.name == product.name && otherProduct.brand == product.brand) {
				res = true
				return true
			}
		})
		return res
	}

	const getMonthCoincides = (firstMonth, secondMonth) => {
		const monthA = getProductMonth(firstMonth)
		const monthB = getProductMonth(secondMonth)
		let monthProductsFinal = []
		monthA.forEach((product) => {
			if (appearsOtherMonth(product, monthB))
				monthProductsFinal.push(product)
		})
		return monthProductsFinal.sort((a, b) => a.name > b.name && a.name.length > b.name.length ? 1 : -1)
	}

	const comparePrices = () => {
		let pricesComparation = []
		const monthB = getMonthCoincides(month1, month2)
		const monthA = getMonthCoincides(month2, month1)
		monthA.forEach((product, index) => {
			let styleComparation = "text-center"
			let diff = product.price - monthB[index].price
			if (diff > 0)
				styleComparation = "text-red-500 text-center"
			if (diff < 0)
				styleComparation = "text-green-500 text-center"
			pricesComparation.push({
				style: styleComparation,
				value: diff
			})
		})
		return pricesComparation
	}

	return (
		<section className={styles.sectionStyle}>
			<h2 className="mb-1 font-bold">Comparación de meses</h2>
			<div>
				<DateSelect onChangeFunction={setMonth1} month={month1}/>
				<DateSelect onChangeFunction={setMonth2} month={month2}/>
			</div>
			<span>Solo se muestran y comparan los productos que salgan en ambos meses</span>
			<div className="flex">
				<table className={styles.tableStlye}>
					<thead className="text-yellow-500">
						<tr>
							<th className="p-1">Nombre</th>
							<th className="p-1">Marca</th>
							<th className="p-1">Tienda</th>
							<th className="p-1">Precio</th>
						</tr>
					</thead>
					<tbody>
						{getMonthCoincides(month1, month2).map((product) => {
							return (
								<tr>
									<td className={styles.tdStyle}>{product.name}</td>
									<td className={styles.tdStyle}>{product.brand}</td>
									<td className={styles.tdStyle}>{product.shop}</td>
									<td className={styles.tdStyle}>{product.price}$</td>
								</tr>
							)
						})}
					</tbody>
				</table>
				<table className="m-2">
					<thead>
						<th className="p-1 text-yellow-500">Diferencia</th>
					</thead>
					<tbody>
						{comparePrices().map((price) => {
							return (<tr>
								<td className={price.style}>{price.value}$</td>
							</tr>)
						})}
					</tbody>
				</table>
				<table className={styles.tableStlye}>
					<thead className="text-yellow-500">
						<tr>
							<th className="p-1">Nombre</th>
							<th className="p-1">Marca</th>
							<th className="p-1">Tienda</th>
							<th className="p-1">Precio</th>
						</tr>
					</thead>
					<tbody>
						{getMonthCoincides(month2, month1).map((product) => {
							return (
								<tr>
									<td className={styles.tdStyle}>{product.name}</td>
									<td className={styles.tdStyle}>{product.brand}</td>
									<td className={styles.tdStyle}>{product.shop}</td>
									<td className={styles.tdStyle}>{product.price}$</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
			<a className="font-bold text-yellow-500" onClick={() => setChartMode("all")}>Ver lista de productos por mes</a>
			<a className="font-bold text-yellow-500" onClick={() => setChartMode("summary")}>Ver gastos por mes</a>
		</section>
	)
}
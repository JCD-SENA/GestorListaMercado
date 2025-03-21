import { useContext } from "react"

import { styles } from "../../assets/styles"
import { MarketContext } from "../../context/MarketContext"

export const MonthSummary = () => {
	const { setChartMode, listProduct } = useContext(MarketContext)
	let listMoney = {}
	return (
		<section className={styles.sectionStyle}>
			<h2 className="mb-1 font-bold">Resumen de gastos por mes</h2>
			<table className={styles.tableStlye}>
				<thead className="text-yellow-500">
					<tr>
						<th className="p-1">Mes</th>
						<th className="p-1">Año</th>
						<th className="p-1">Gastos totales</th>
					</tr>
				</thead>
				<tbody>
					{listProduct.map((product) => {
						let date = (product.date.getMonth() + 1) + "/" + product.date.getFullYear()
						if (Object.keys(listMoney).includes(date) && product.status == "activo")
							listMoney[date].price += product.price
						else {
							listMoney[date] = {
								price: product.price,
								month: product.date.getMonth() + 1,
								year: product.date.getFullYear()
							}
						}
					})}
					{Object.keys(listMoney).map((date) => {
						console.log(listMoney[date])
						return <tr>
							<td className={styles.tdStyle}>{listMoney[date].month}</td>
							<td className={styles.tdStyle}>{listMoney[date].year}</td>
							<td className={styles.tdStyle}>{listMoney[date].price}</td>
						</tr>
					})}
				</tbody>
			</table>
			<a className="font-bold text-yellow-500" onClick={() => setChartMode("all")}>Ver lista de productos por mes</a>
			<a className="font-bold text-yellow-500" onClick={() => setChartMode("comparation")}>Comparar meses</a>
		</section>
	)
}
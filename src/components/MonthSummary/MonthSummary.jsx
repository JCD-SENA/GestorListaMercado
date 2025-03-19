import { useContext } from "react"

import { styles } from "../../assets/styles"
import { MarketContext } from "../../context/MarketContext"

export const MonthSummary = () => {
    const { setChartMode } = useContext(MarketContext)

	return (
		<section className={styles.sectionStyle}>
			<h2 className="mb-1 font-bold">Resumen de gastos por mes</h2>
            <table className={styles.tableStlye}>
				<thead className="text-yellow-500">
                    <th>Mes</th>
                    <th>Año</th>
                    <th>Gastos totales</th>
                </thead>
				<tbody>

                </tbody>
			</table>
            <a className="font-bold text-yellow-500" onClick={() => setChartMode("all")}>Ver lista de productos por mes</a>
		</section>
	)
}
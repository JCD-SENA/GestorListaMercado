import { useContext } from "react"

import { styles } from "../../assets/styles"
import { MarketContext } from "../../context/MarketContext"

export const DateSelect = () => {
	const { listProduct, dateProduct, month, setMonth } = useContext(MarketContext)
	let listDates = []
	return (
		<select className={styles.selectStyle} value={month} onChange={(e) => setMonth(e.target.value)}>
			{listProduct.map((product) => {
				let date = (product.date.getMonth() + 1) + "/" + product.date.getFullYear()
				if (!listDates.includes(date)) {
					listDates.push(date)
					return <option value={date} key={date}>{date}</option>
				}
			})}
		</select>
	)
}
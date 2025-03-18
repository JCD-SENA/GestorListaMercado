import { useContext } from "react"

import { styles } from "../../assets/styles"
import { MarketContext } from "../../context/MarketContext"

export const CategorySelect = () => {
	const { setCategoryFilter, categoryFilter, listProduct } = useContext(MarketContext)
	let listCategories = []
	return (
		<select className={styles.selectStyle} onChange={(e) => setCategoryFilter(e.target.value)} value={categoryFilter}>
			<option value={"*"}>Todas las categorías</option>
			{listProduct.map((product) => {
				if (!listCategories.includes(product.category)) {
					listCategories.push(product.category)
					return <option value={product.category} key={product.category}>{product.category}</option>
				}
			})}
		</select>
	)
}
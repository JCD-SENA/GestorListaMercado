import { useContext } from "react"

import { MarketContext } from "../../../context/MarketContext"
import { styles } from "../../../assets/styles"

export const Product = ({ position, productData }) => {
	const { setEditMode, setCurrentlyEditing } = useContext(MarketContext)

	const editProduct = () => {
		setEditMode(true)
		setCurrentlyEditing([productData, position])
	}

	return (
	<tr>
		<td className="w-1">
			<button className="bg-yellow-500 p-1 pr-3 pl-3 rounded-xl text-center m-1 ml-6" onClick={editProduct}>Editar</button>
		</td>
		<td className={styles.tdStyle}>{productData.name}</td>
		<td className={styles.tdStyle}>{productData.brand}</td>
		<td className={styles.tdStyle}>{productData.shop}</td>
		<td className={styles.tdStyle}>{productData.price}</td>
		<td className={styles.tdStyle}>{productData.measurement}</td>
		<td className={styles.tdStyle}>{productData.category}</td>
	</tr>)
}
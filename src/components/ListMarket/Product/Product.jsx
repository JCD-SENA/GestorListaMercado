import { useContext } from "react"

import { MarketContext } from "../../../context/MarketContext"

export const Product = ({ position, productData }) => {
	const { setEditMode, setCurrentlyEditing } = useContext(MarketContext)

	const tdStyle = "p-1 text-center"

	const editProduct = () => {
		setEditMode(true)
		setCurrentlyEditing([productData, position])
	}

	return (
	<tr>
		<td className="w-1">
			<button className="bg-yellow-500 p-1 pr-3 pl-3 rounded-xl text-center m-1 ml-6" onClick={editProduct}>Editar</button>
		</td>
		<td className={tdStyle}>{productData.name}</td>
		<td className={tdStyle}>{productData.shop}</td>
		<td className={tdStyle}>{productData.price}</td>
		<td className={tdStyle}>{productData.measurement}</td>
		<td className={tdStyle}>{productData.category}</td>
	</tr>)
}
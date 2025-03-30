import { useContext } from "react"

import { MarketContext } from "../../../context/MarketContext"
import { sessionContext } from "../../../context/SessionContext"
import { styles } from "../../../assets/styles"

import { updateProduct, getProducts } from "../../../utils/firebase-db"

export const Product = ({ position, productData }) => {
	const { setEditMode, setCurrentlyEditing, setListProduct } = useContext(MarketContext)
	const {session} = useContext(sessionContext)

	const editProduct = () => {
		if (productData.status == "activo") {
			setEditMode(true)
			setCurrentlyEditing([productData, position])
		}
	}

	const deactivateProduct = () => {
		updateProduct(position, {
			status: productData.status == "activo" ? "inactivo" : "activo"
		})
		getProducts(session.uid, setListProduct)
	}

	return (
	<tr className={`${productData.status == "activo" ? "" : "opacity-25"} `}>
		<td className="w-1">
			<button className="bg-yellow-500 p-1 pr-3 pl-3 rounded-xl text-center m-1 ml-6" onClick={editProduct}>Editar</button>
		</td>
		<td className={styles.tdStyle}>{productData.name}</td>
		<td className={styles.tdStyle}>{productData.brand}</td>
		<td className={styles.tdStyle}>{productData.shop}</td>
		<td className={styles.tdStyle}>{productData.price}$</td>
		<td className={styles.tdStyle}>{productData.measurement}</td>
		<td className={styles.tdStyle}>{productData.category}</td>
		<td className="w-1">
			<button className={productData.status == "activo" ? "bg-red-500 p-1 pr-3 pl-3 rounded-xl text-center m-1 ml-6" : "bg-green-500 p-1 pr-3 pl-3 rounded-xl text-center m-1 ml-6"} onClick={deactivateProduct}>{productData.status == "activo" ? "X" : "✔"}</button>
		</td>
	</tr>)
}
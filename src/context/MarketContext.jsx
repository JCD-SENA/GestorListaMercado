import { createContext, useState, useEffect } from "react";

export const MarketContext = createContext()

export const MarketContextHandler = ({ children }) => {
	const [nameProduct, setNameProduct] = useState("")
	const [dateProduct, setDateProduct] = useState("")
	const [priceProduct, setPriceProduct] = useState(0)
	const [listProduct, setListProduct] = useState([])
	const [totalPrice, setTotalPrice] = useState(0)
	//const [] = useState(1)

	const date = new Date()
	
	useEffect(() => {
		setDateProduct(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`)
	}, [, listProduct])

	return (
		<MarketContext.Provider value={{
			nameProduct, priceProduct, listProduct, totalPrice, dateProduct, setDateProduct, setNameProduct, setPriceProduct, setListProduct, setTotalPrice,
			"sectionStyle": "p-2 bg-sky-900 w-1/3 flex flex-col text-white items-center rounded-xl"
		}}>
			{children}
		</MarketContext.Provider>
	)
}
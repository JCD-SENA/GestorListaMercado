import { createContext, useState, useEffect } from "react";

export const MarketContext = createContext()

export const MarketContextHandler = ({ children }) => {
	const [dateProduct, setDateProduct] = useState("")
	const [listProduct, setListProduct] = useState([])
	const [totalPrice, setTotalPrice] = useState(0)
	const [editMode, setEditMode] = useState(false)
	const [currentlyEditing, setCurrentlyEditing] = useState(undefined)

	const date = new Date()
	
	useEffect(() => {
		setDateProduct(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`)
	}, [, listProduct])

	return (
		<MarketContext.Provider value={{
			listProduct, totalPrice, dateProduct, editMode, currentlyEditing, setListProduct, setTotalPrice, setEditMode, setCurrentlyEditing,
			"sectionStyle": "p-2 bg-sky-900 flex flex-col text-white items-center rounded-xl"
		}}>
			{children}
		</MarketContext.Provider>
	)
}
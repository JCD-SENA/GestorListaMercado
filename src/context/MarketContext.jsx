import { createContext, useState, useEffect } from "react";

export const MarketContext = createContext()

export const MarketContextHandler = ({ children }) => {
	const currentDate = new Date()
	const [dateProduct, setDateProduct] = useState("")
	const [listProduct, setListProduct] = useState([])
	const [totalPrice, setTotalPrice] = useState(0)
	const [editMode, setEditMode] = useState(false)
	const [currentlyEditing, setCurrentlyEditing] = useState(undefined)
	const [categoryFilter, setCategoryFilter] = useState("*")
	const [month, setMonth] = useState()
	const [chartMode, setChartMode] = useState("full")
	
	useEffect(() => {
		setDateProduct(`${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`)
		if (!month)
			setMonth(`${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`)
	}, [, listProduct])

	return (
		<MarketContext.Provider value={{
			listProduct, totalPrice, dateProduct, editMode, currentlyEditing, categoryFilter, month, chartMode,
			setListProduct, setTotalPrice, setEditMode, setCurrentlyEditing, setCategoryFilter, setMonth, setChartMode
		}}>
			{children}
		</MarketContext.Provider>
	)
}
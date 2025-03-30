import { useContext } from "react"

import { MarketContext } from "../../context/MarketContext"

export const NeedHelp = () => {
	const { setChartMode } = useContext(MarketContext)
	return (
		<span className="md:absolute md:bottom-1 max-md:m-10 md:m-2 text-white">¿Tienes algún problema? <a onClick={() => setChartMode("help")} className="text-yellow-500 font-bold">Contacte aquí</a></span>
	)
}
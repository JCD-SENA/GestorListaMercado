import { useContext } from 'react'

import './App.css'

import { sessionContext } from './context/SessionContext'
import { MarketContext } from './context/MarketContext'

import { CloseSession } from './components/CloseSession/CloseSession'
import { FormMarket } from './components/FormMarket/FormMarket'
import { ListMarket } from './components/ListMarket/ListMarket'
import { Register } from './components/Register/Register'
import { Login } from './components/Login/Login'
import { MonthComparation } from './components/MonthComparation/MonthComparation'
import { MonthSummary } from './components/MonthSummary/MonthSummary'

export default () => {
	const { session, logOrSignIn } = useContext(sessionContext)
	const { chartMode } = useContext(MarketContext)

	const displayProper = () => {
		if (session) {
			let chart = <ListMarket/>
			if (chartMode == "comparation")
				chart = <MonthComparation/>
			if (chartMode == "summary")
				chart = <MonthSummary/>
			return (<>
				<CloseSession/>
				<FormMarket/>
				{ chart }
			</>)
		} else {
			if (logOrSignIn == "sign") {
				return (<Register/>)
			} else {
				return (<Login/>)
			}
		}	
	}

	return (<>{displayProper()}</>)
}
import { useContext } from 'react'

import './App.css'

import { sessionContext } from './context/sessionContext'

import { FormMarket } from './components/FormMarket/FormMarket'
import { ListMarket } from './components/ListMarket/ListMarket'
import { Register } from './components/Register/Register'

export default () => {
	const { session } = useContext(sessionContext)
	return (
		<>
			{session ? 
				<>
					<FormMarket/>
					<ListMarket/>
				</> : <>
					<Register/>
				</>
			}
		</>
	)
}
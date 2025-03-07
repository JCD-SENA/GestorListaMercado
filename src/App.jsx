import { useContext } from 'react'

import './App.css'

import { sessionContext } from './context/SessionContext'

import { CloseSession } from './components/CloseSession/CloseSession'
import { FormMarket } from './components/FormMarket/FormMarket'
import { ListMarket } from './components/ListMarket/ListMarket'
import { Register } from './components/Register/Register'
import { Login } from './components/Login/Login'

export default () => {
	const { session, logOrSignIn } = useContext(sessionContext)
	return (
		<>
			{session ? 
				<>
					<CloseSession/>
					<FormMarket/>
					<ListMarket/>
				</> 
				:
					logOrSignIn == "sign" ?
						<Register/>
					:
						<Login/>	
			}
		</>
	)
}
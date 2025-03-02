import { useState } from 'react'

import './App.css'

import { FormMarket } from './components/FormMarket/FormMarket'
import { ListMarket } from './components/ListMarket/ListMarket'

export default () => {
	return (
		<>
			<FormMarket/>
			<ListMarket/>
		</>
	)
}
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { MarketContextHandler } from './context/MarketContext.jsx'

createRoot(document.getElementById('root')).render(
	<MarketContextHandler>
		<App />
	</MarketContextHandler>
)

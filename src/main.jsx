import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { MarketContextHandler } from './context/MarketContext.jsx'
import { SessionContextHandler } from './context/SessionContext.jsx'

createRoot(document.getElementById('root')).render(
	<SessionContextHandler>
		<MarketContextHandler>
			<App />
		</MarketContextHandler>
	</SessionContextHandler>
)

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.scss'

import AccountRoutes from './account/AccountRoutes'

let routeConfig = []
routeConfig = routeConfig.concat(AccountRoutes())

export default () => (
	<BrowserRouter>
		<Switch>
			{routeConfig.map((entry) => (
				<Route {...entry} />
			))}
		</Switch>
	</BrowserRouter>
)

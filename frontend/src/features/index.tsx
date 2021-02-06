import { BrowserRouter, Route, Switch } from 'react-router-dom'

import AccountRoutes from './account/AccountRoutes'
import AccountLayout from './account/AccountLayout/AccountLayout'
import './index.scss'

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

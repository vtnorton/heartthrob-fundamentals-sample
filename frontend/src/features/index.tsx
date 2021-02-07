import {ConnectedRouter} from 'connected-react-router'
import React from 'react'
import {useSelector} from 'react-redux'
import {Redirect, Route, Switch} from 'react-router-dom'

import {history} from '../init-redux'
import AccountRoutes from './account/AccountRoutes'
import {getToken} from './account/AccountSelectors'
import DashboardRoutes from './dashboard/DashboardRoutes'
import './index.scss'

const publicRoutes = [].concat(AccountRoutes())
const privateRoutes = [].concat(DashboardRoutes())

function getTokenFromSelector() {
	return useSelector(getToken)
}

export default () => {
	const token = getTokenFromSelector()
	const isAuthenticated = () => token !== null

	const PrivateRoute = ({component: Component, ...rest}) => (
		<Route
			{...rest}
			render={(props) =>
				isAuthenticated() ? <Component {...props} /> : <Redirect to={{pathname: '/account/login', state: {from: props.location}}} />
			}
		/>
	)

	return (
		<ConnectedRouter history={history}>
			<Switch>
				{publicRoutes.map((entry) => (
					<Route {...entry} />
				))}
				{privateRoutes.map((entry) => (
					<PrivateRoute {...entry} />
				))}
			</Switch>
		</ConnectedRouter>
	)
}

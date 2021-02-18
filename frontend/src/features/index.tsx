import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Redirect, Route, Switch } from 'react-router-dom'

import { history } from '../init-redux'
import { getToken } from './account/AccountSelectors'
import AccountRoutes from './account/AccountRoutes'
import DashboardRoutes from './dashboard/DashboardRoutes'
import HeaderComponent from '../components/header/HeaderComponent'
import './index.scss'

const publicRoutes = [].concat(AccountRoutes())
const privateRoutes = [].concat(DashboardRoutes())

export default () => {
	const token = localStorage.getItem('token')
	const isAuthenticated = () => token !== null

	const PrivateRoute = ({ component: Component, ...rest }) => (
		<Route
			{...rest}
			render={(props) =>
				isAuthenticated() ? <Component {...props} /> : <Redirect to={{ pathname: '/account/login', state: { from: props.location } }} />
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
					<>
						<HeaderComponent />
						<PrivateRoute {...entry} />
					</>
				))}
			</Switch>
		</ConnectedRouter>
	)
}

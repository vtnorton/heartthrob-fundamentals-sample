import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Redirect, Route, Switch } from 'react-router-dom'
import { initializeIcons } from '@fluentui/react'

import { history } from '../init-redux'
import AccountRoutes from './account/AccountRoutes'
import DashboardRoutes from './dashboard/DashboardRoutes'
import HeaderComponent from '../components/header/HeaderComponent'
import './index.scss'
import SystemRoutes from './system/SystemRoutes'

const token: string = localStorage.getItem('token')
const publicRoutes = [].concat(AccountRoutes())
const privateRoutes = [].concat(SystemRoutes(), DashboardRoutes())

export default () => {
	initializeIcons()
	const isAuthenticated = () => token !== null
	const PrivateRoute = ({ component: Component, ...rest }) => (
		<Route
			{...rest}
			render={(props) => {
				if (isAuthenticated())
					return (
						<>
							<HeaderComponent token={token} />
							<div className='content'>
								<Component {...props} />
							</div>
						</>
					)
				return <Redirect to={{ pathname: '/account/login', state: { from: props.location } }} />
			}}
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

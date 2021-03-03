import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Redirect, Route, Switch } from 'react-router-dom'
import { initializeIcons } from '@fluentui/react'
import { MenuItemType, HeaderComponent } from 'heartthrob-react'

import { history } from '../init-redux'
import AccountRoutes from './account/AccountRoutes'
import DashboardRoutes from './dashboard/DashboardRoutes'
import './index.scss'
import SystemRoutes from './system/SystemRoutes'

const token: string = localStorage.getItem('token')
const publicRoutes = [].concat(AccountRoutes())
const privateRoutes = [].concat(SystemRoutes(), DashboardRoutes())

export default () => {
	initializeIcons()
	const isAuthenticated = () => token !== null

	const accountMenu: MenuItemType[] = [
		{ icon: { iconName: 'UserOptional' }, name: 'Gerenciar conta', location: '/manage/profile' },
		// { icon: manageProfileIcon, name: 'Enviar feedbacks', location: '/manage/feedback/send' },
		//	{ icon: manageProfileIcon, name: 'Feedbacks', location: '/manage/feedback' },
		{ icon: { iconName: 'SignOut' }, name: 'Sair', action: signOut },
	]

	function signOut() {
		localStorage.removeItem('token')
		window.location.href = '/account/login'
	}

	const PrivateRoute = ({ component: Component, ...rest }) => (
		<Route
			{...rest}
			render={(props) => {
				if (isAuthenticated())
					return (
						<>
							<HeaderComponent token={token} accountMenu={accountMenu} />
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

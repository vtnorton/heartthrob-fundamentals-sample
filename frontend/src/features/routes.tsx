import { ConnectedRouter } from 'connected-react-router'
import { Redirect, Route, Switch } from 'react-router'
import { history } from '../init-redux'

import Header from '../components/HeaderComponent/HeaderComponent'
import AccountRoutes from './account/AccountRoutes'
import DashboardRoutes from './dashboard/DashboardRoutes'
import SystemRoutes from './system/SystemRoutes'

const token: string = localStorage.getItem('token')
const publicRoutes = [].concat(AccountRoutes())
const privateRoutes = [].concat(SystemRoutes(), DashboardRoutes())

export default () => {
	const isAuthenticated = () => token !== undefined
	const PrivateRoute = ({ component: Component, ...rest }) => (
		<Route
			{...rest}
			render={(props) => {
				if (isAuthenticated())
					return (
						<>
							<Header />
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

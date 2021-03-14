import { ConnectedRouter } from 'connected-react-router'
import { Redirect, Route, Switch } from 'react-router'
import { history } from '../init-redux'

import HeaderComponent from '../components/HeaderComponent/HeaderComponent'
import AccountRoutes from './account/AccountRoutes'
import DashboardRoutes from './dashboard/DashboardRoutes'
import SystemRoutes from './system/SystemRoutes'

const token: string = localStorage.getItem('token')
const publicRoutes = [].concat(AccountRoutes())
const privateRoutes = [].concat(SystemRoutes(), DashboardRoutes())

 const Features = () : JSX.Element => {
	const isAuthenticated = () => token !== undefined
	const PrivateRoute = ({ component: Component, ...rest }) => (
		<Route
			{...rest}
			render={(props) => {
				if (isAuthenticated())
					return (
						<>
							<HeaderComponent />
							<div className='content'>
								<Component {...props} />
							</div>
						</>
					)
				return <Redirect to={{ pathname: '/account/login', state: { from: props.location } }} />
			}}/>
	)

	return (
		<ConnectedRouter history={history}>
			<Switch>
				{publicRoutes.map((entry, key) => (
					<Route {...entry} key={key} />
				))}
				{privateRoutes.map((entry, key) => (
					<PrivateRoute {...entry} key={key} />
				))}
			</Switch>
		</ConnectedRouter>
	)
}

export default Features
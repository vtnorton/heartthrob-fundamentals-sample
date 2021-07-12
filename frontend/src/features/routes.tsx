import { createRoutes } from 'heartthrob-fundamentals/core/features/routes'
import { Route } from 'heartthrob-fundamentals/core/features/types'

import DashboardRoutes from './dashboard/DashboardRoutes'

const _publicRoutes: Route[] = [].concat()
const _privateRoutes: Route[] = [].concat(DashboardRoutes)

const Features = (props): JSX.Element => {
	return createRoutes(_privateRoutes, _publicRoutes, props.context)
}

export default Features
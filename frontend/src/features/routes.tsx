import { publicRoutes, privateRoutes, createRoutes } from 'heartthrob-fundamentals/core/features/routes'

const _publicRoutes = publicRoutes.concat()
const _privateRoutes = privateRoutes.concat()

const Features = (): JSX.Element => {
	return createRoutes(_privateRoutes, _publicRoutes)
}

export default Features
import LoginPage from '.'
import RegisterPage from './RegisterPage/RegisterPage'

export default () => [
	{ path: '/account/login', component: LoginPage },
	{ path: '/account/register', component: RegisterPage },
]

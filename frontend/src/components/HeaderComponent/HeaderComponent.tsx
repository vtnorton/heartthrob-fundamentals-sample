import { MenuItemType, HeaderProps } from 'heartthrob-react/src/components/Header/HeaderTypes'
import Header from 'heartthrob-react/src/components/Header/Header'
import jwt_decode from 'jwt-decode'

const HeaderComponent = (): JSX.Element => {
	const signOut = () => {
		localStorage.removeItem('token')
		window.location.href = '/account/login'
	}
	
	const accountMenu: MenuItemType[] = [
		{ icon: { iconName: 'UserOptional' }, name: 'Gerenciar conta', location: '/manage/profile' },
		// { icon: manageProfileIcon, name: 'Enviar feedbacks', location: '/manage/feedback/send' },
		//	{ icon: manageProfileIcon, name: 'Feedbacks', location: '/manage/feedback' },
		{ icon: { iconName: 'SignOut' }, name: 'Sair', action: signOut },
	]
	
	const token: string = localStorage.getItem('token')
	const decodedToken: any = jwt_decode(token) //TODO: criar interface para token
	const name = decodedToken.unique_name[2]
	const headerOptions: HeaderProps = {
		systemName: 'heartthrob',
		name: name,
		accountMenu: accountMenu,
	}
	
	return <Header props={headerOptions} />
}

export default HeaderComponent

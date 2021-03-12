import { MenuItemType, HeaderComponent } from 'heartthrob-react'

const token: string = localStorage.getItem('token')

const Header = () => {
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

	return <HeaderComponent token={token} accountMenu={accountMenu} />
}

export default Header

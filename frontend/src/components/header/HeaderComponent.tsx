import 'heartthrob'
import jwt_decode from 'jwt-decode'
import { Icon, Persona, IPersonaSharedProps } from '@fluentui/react'

import { MenuItemType } from './HeaderComponentTypes'
import './HeaderComponent.scss'

function getIntials(value: string) {
	value = removeSpecialCharacters(value)
		.replace(/\W*(\w)\w*/g, '$1')
		.toUpperCase()
		.trim()
	return value[0] + value[value.length - 1]
}

function removeSpecialCharacters(text: string) {
	return text
		.toLowerCase()
		.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a')
		.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e')
		.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i')
		.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o')
		.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u')
		.replace(new RegExp('[Ç]', 'gi'), 'c')
}

function signOut() {
	localStorage.removeItem('token')
	window.location.href = '/account/login'
}

function constructAccountMenu(token: string) {
	const accountMenu: MenuItemType[] = [
		{ icon: { iconName: 'UserOptional' }, name: 'Gerenciar conta', location: '/manage/profile' },
		// { icon: manageProfileIcon, name: 'Enviar feedbacks', location: '/manage/feedback/send' },
		//	{ icon: manageProfileIcon, name: 'Feedbacks', location: '/manage/feedback' },
		{ icon: { iconName: 'SignOut' }, name: 'Sair', action: signOut },
	]

	const decodedToken: any = jwt_decode(token) //TODO: criar interface para token
	const name = decodedToken.unique_name[0]

	const userProfile: IPersonaSharedProps = {
		imageInitials: getIntials(name),
		text: name,
	}

	const menuContent = (item: MenuItemType) => {
		return (
			<>
				<Icon iconName={item.icon.iconName} />
				{item.name}
			</>
		)
	}
	const clickableItem = (item: MenuItemType) => {
		if (item.action !== undefined) return <a onClick={item.action}>{menuContent(item)}</a>

		return <a href={item.location}>{menuContent(item)}</a>
	}

	return (
		<li>
			<Persona {...userProfile} coinSize={35} />
			<ul className='menu dark right'>
				{accountMenu.map((item, key) => (
					<li key={key}>{clickableItem(item)}</li>
				))}
			</ul>
		</li>
	)
}

// TODO: Levar componente para o heartthrob-react
const HeaderComponent = ({ token }) => {
	return (
		<header className='acrylic header'>
			<div className='logo'>
				<img src='~/images/logo-white.png' alt='Logo da aplicação' />
			</div>
			<div className='line'></div>
			<div className='right'>
				<ul>{constructAccountMenu(token)}</ul>
			</div>
		</header>
	)
}

export default HeaderComponent

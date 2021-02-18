import 'heartthrob'
import { IIconProps } from '@fluentui/react'

import { MenuItemType } from './HeaderComponentTypes'

const HeaderComponent = () => {
	const manageProfileIcon: IIconProps = { iconName: 'Permissions' }
	const accountMenu: MenuItemType[] = [
		{ icon: manageProfileIcon, name: 'Editar perfil', location: '/manage/profile' },
		{ icon: manageProfileIcon, name: 'Enviar feedbacks', location: '/manage/feedback/send' },
		{ icon: manageProfileIcon, name: 'Feedbacks', location: '/manage/feedback' },
		{ icon: manageProfileIcon, name: 'Sair' },
	]

	return (
		<header className='acrylic header'>
			<div className='logo'>
				<img src='~/images/logo-white.png' />
			</div>
			<div className='line'></div>
			<div className='right'>
				<ul>
					<li className='search'>
						<a>
							<i className='fa fa-search'></i>
						</a>
						<input type='text' name='search' placeholder='Type here to search' />
					</li>
					<li>
						<a id='notifications'>
							<i className='fa fa-inbox'></i>
						</a>
					</li>
					<li>
						<a href='/Feedback/Send'>
							<i className='far fa-smile'></i>
						</a>
					</li>
					<li>
						<a>
							<i className='fa fa-cogs'></i>
						</a>
						<ul className='menu dark right'>
							<li>
								<a href='/Admin/Users'>
									<i className='fa fa-users'></i>Equipe
								</a>
							</li>
							<li>
								<a href='#' className='more no-icon'>
									Mais opções...
								</a>
								<ul>
									<li>
										<a href='/Admin/ManageFeedback/Index'>
											<i className='fa fa-smile-wink'></i>Feedbacks
										</a>
									</li>
									<li>
										<a href=''>
											<i className='fa fa-list'></i>Chamados
										</a>
									</li>
									<li>
										<a href='/Admin/Changelogs/Index'>
											<i className='fa fa-share'></i>Alterações
										</a>
									</li>
									<li>
										<a href='/Admin/Terms'>
											<i className='fa fa-file-alt'></i>Termos
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='fa fa-envelope'></i>E-mail
										</a>
									</li>
								</ul>
							</li>
							<li className='line'></li>
							<li>
								<a href='/Admin/Settings/Index'>
									<i className='fa fa-cogs'></i>Configurações
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a>
							<div className='user-img'>
								<img src='@UserManager.GetUserAsync(User).Result.Avatar' />
							</div>{' '}
							TESTE TESTE
						</a>
						<ul className='menu dark right'>
							{accountMenu.map((item, key) => (
								<li key={key}>
									<a href={item.location}>{item.name}</a>
								</li>
							))}
						</ul>
					</li>
				</ul>
			</div>
		</header>
	)
}

export default HeaderComponent

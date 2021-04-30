import 'heartthrob'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Taskbar, LoadButton } from 'heartthrob-react'
import {
	ActionButton,
	Checkbox,
	DefaultButton,
	IIconProps,
	TextField,
} from '@fluentui/react'

import AccountLayout, { showError } from '../AccountLayout/AccountLayout'
import { LoginRequest } from '../AccountTypes'
import { actions } from '../AccountState'
import { selectIsLoading } from '../AccountSelectors'
import { useHistory } from 'react-router-dom'

const LoginPage = (): JSX.Element => {
	const history = useHistory()
	const dispatch = useDispatch()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [rememberMe, setRememberMe] = useState(false)

	const doLogin = () => {
		const credentials: LoginRequest = {
			email: email,
			password: password,
			rememberMe: rememberMe,
		}
		dispatch(actions.getToken(credentials))
	}

	const goToRegister = () => {
		history.push('/account/register')
	}

	const leftButtons = () => {
		const forgotPassword: IIconProps = { iconName: 'ChevronRight' }
		return (
			<ActionButton text='Esqueceu a sua senha' iconProps={forgotPassword} />
		)
	}

	const actionButtons = () => {
		const isLoading = useSelector(selectIsLoading)
		const loginIcon: IIconProps = { iconName: 'Permissions' }
		const registerIcon: IIconProps = { iconName: 'PeopleAdd' }
			
		return (
			<LoadButton loadingText='Entrando' iconProps={loginIcon} text='Entrar' onClick={doLogin} isLoading={isLoading} >
				<DefaultButton
					text='Registrar'
					onClick={goToRegister}
					iconProps={registerIcon}/>
			
			</LoadButton>
		)
	}

	// TODO: Fazer validação do formulário
	return (
		<AccountLayout>
			<form name='login'>
				<h3>Login</h3>
				<p>Faça login no sistema para continuar.</p>

				{showError()}

				<div className='space-low'></div>
				<TextField
					name='email'
					label='E-mail'
					placeholder='contato@vtnorton.com'
					onChange={(e) => setEmail((e.target as HTMLTextAreaElement).value)} />
				<TextField
					name='password'
					label='Senha'
					type='password'
					onChange={(e) => setPassword((e.target as HTMLTextAreaElement).value)} />
				<div className='space-low'></div>

				<Checkbox
					name='rememberMe'
					label='Lembrar de mim'
					onChange={(e) =>
						setRememberMe((e.target as HTMLInputElement).checked)
					} />

				<Taskbar buttons={actionButtons()}></Taskbar>
			</form>
		</AccountLayout>
	)
}
export default LoginPage

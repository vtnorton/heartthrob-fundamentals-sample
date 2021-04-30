import 'heartthrob'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { DefaultButton, IIconProps, TextField } from '@fluentui/react'

import AccountLayout, { showError } from '../AccountLayout/AccountLayout'
import { selectIsLoading } from '../AccountSelectors'
import { RegisterRequest } from '../AccountTypes'
import { actions } from '../AccountState'
import { LoadButton, Taskbar, PasswordInput } from 'heartthrob-react'

const RegisterPage = () => {
	const history = useHistory()
	const dispatch = useDispatch()

	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const doRegister = () => {
		const register: RegisterRequest = {
			email: email,
			password: password,
			name: firstName,
			lastName: lastName,
			confirmPassword: password,
		}
		dispatch(actions.createRegister(register))
	}

	const goToLogin = () => {
		history.push('/account/login')
	}

	const actionButtons = () => {
		const isLoading = useSelector(selectIsLoading)
		const registerIcon: IIconProps = { iconName: 'PeopleAdd' }
		const loginIcon: IIconProps = { iconName: 'Permissions' }

		return (
			<LoadButton loadingText='Registrando' iconProps={registerIcon} disabled={password ? false : true} text='Registrar' onClick={doRegister} isLoading={isLoading} >
				<DefaultButton
					text='Entrar'
					onClick={goToLogin}
					iconProps={loginIcon}/>
			</LoadButton>
		)
	}

	return (
		<AccountLayout>
			<form name='register'>
				<h3>Registar um novo usuário</h3>

				<div className='space-low'></div>
				<div className='row'>
					<div className='col-md-6 col-sm-6'>
						<TextField name='firstName' label='Nome' placeholder='João' onChange={(e) => setFirstName((e.target as HTMLTextAreaElement).value)} />
					</div>
					<div className='col-md-6 col-sm-6'>
						<TextField name='lastName' label='Sobrenome' placeholder='Silva' onChange={(e) => setLastName((e.target as HTMLTextAreaElement).value)} />
					</div>
				</div>

				<div className='row'>
					<div className='col-md-12'>
						<TextField
							name='email'
							label='E-mail'
							placeholder='seuemail@empresa.com'
							onChange={(e) => setEmail((e.target as HTMLTextAreaElement).value)}/>
					</div>
				</div>

				<PasswordInput onSubmitMessage={(e) => setPassword(e)} />

				{showError}

				<Taskbar buttons={actionButtons()}></Taskbar>
			</form>
		</AccountLayout>
	)
}

export default RegisterPage

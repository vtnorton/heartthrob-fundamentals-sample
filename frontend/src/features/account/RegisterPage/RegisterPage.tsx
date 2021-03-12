import 'heartthrob'
import React, { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Taskbar from 'heartthrob-react/src/components/Card/Taskbar/Taskbar'
import { DefaultButton, IIconProps, PrimaryButton, Spinner, SpinnerSize, TextField } from '@fluentui/react'

import AccountLayout, { showError } from '../AccountLayout/AccountLayout'
import { selectIsLoading } from '../AccountSelectors'
import { RegisterRequest } from '../AccountTypes'
import './RegisterPage.scss'
import { actions } from '../AccountState'

const RegisterPage = () => {
	const history = useHistory()
	const dispatch = useDispatch()

	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [password, setPassword] = useState('')
	const [isAbleToRegister, setIsAbleToRegister] = useState(true)

	const doRegister = () => {
		const register: RegisterRequest = {
			email: email,
			password: password,
			name: firstName,
			lastName: lastName,
			confirmPassword: confirmPassword,
		}
		dispatch(actions.createRegister(register))
	}

	const goToLogin = () => {
		history.push('/account/login')
	}

	// TODO: levar para o heartthrob
	const checkPasswordStrength = (password: string, output: string) => {
		let message: string
		let capsCount: number, smallCount: number, numberCount: number, symbolCount: number

		const infoBox = document.querySelector(output)
		infoBox.classList.add('validator')

		infoBox.classList.remove('short')
		infoBox.classList.remove('strong')
		infoBox.classList.remove('weak')
		infoBox.classList.remove('medium')

		if (password.length < 8) {
			infoBox.classList.add('short')
			infoBox.innerHTML = 'A senha necessita ter pelo menos 8 caracteres.'
		} else {
			capsCount = (password.match(/[A-Z]/g) || []).length
			smallCount = (password.match(/[a-z]/g) || []).length
			numberCount = (password.match(/[0-9]/g) || []).length
			symbolCount = (password.match(/\W/g) || []).length

			if (capsCount < 1) {
				infoBox.classList.add('weak')
				message = 'A senha precisa conter ao menos uma letra em maiúsculo.'
			} else if (smallCount < 1) {
				infoBox.classList.add('weak')
				message = 'A senha precisa conter ao menos uma letra em minúsculo.'
			} else if (numberCount < 1) {
				infoBox.classList.add('weak')
				message = 'A senha precisa conter ao menos um número.'
			} else if (symbolCount < 1) {
				infoBox.classList.add('medium')
				message = 'A senha precisa conter ao menos um caracter especial.'
			} else {
				infoBox.classList.add('strong')
				infoBox.innerHTML = 'Sua senha está forte.'
				return true
			}

			infoBox.innerHTML = message
			return false
		}
	}

	// TODO: levar para o heartthrob
	const checkPasswordMatch = (password: string, confirmPassword: string, output: string) => {
		const infoBox = document.querySelector(output)
		infoBox.classList.add('validator')

		if (password !== confirmPassword) {
			infoBox.classList.remove('strong')
			infoBox.innerHTML = 'As senhas estão diferentes, por favor, tente novamente.'
		} else {
			infoBox.classList.add('strong')
			infoBox.innerHTML = 'As senhas estão iguais.'
			return true
		}

		return false
	}

	const onPasswordChange = (element: FormEvent<HTMLTextAreaElement>) => {
		const value = (element.target as HTMLTextAreaElement).value
		setPassword(value)
		checkPasswordStrength(value, '#password-check')
	}

	const onConfirmPasswordChange = (element: FormEvent<HTMLTextAreaElement>) => {
		const value = (element.target as HTMLTextAreaElement).value
		const doesPasswordMatch = checkPasswordMatch(password, value, '#password-match')
		setConfirmPassword(value)
		checkPassword(doesPasswordMatch)
	}

	const checkPassword = (doesPasswordMatch: boolean) => {
		const isStrong = checkPasswordStrength(password, '#password-check')
		if (confirmPassword !== '') 
setIsAbleToRegister(!(isStrong && doesPasswordMatch))
	}

	const actionButtons = () => {
		const isLoading = useSelector(selectIsLoading)
		const registerIcon: IIconProps = { iconName: 'PeopleAdd' }
		const loginIcon: IIconProps = { iconName: 'Permissions' }

		if (isLoading) {
			return <Spinner size={SpinnerSize.medium} label='Registrando novo usuário' ariaLive='assertive' labelPosition='right' />
		}

		return (
			<>
				<DefaultButton text='Entrar' onClick={goToLogin} iconProps={loginIcon} />
				<PrimaryButton text='Registrar' disabled={isAbleToRegister} onClick={doRegister} iconProps={registerIcon} />
			</>
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
							onChange={(e) => setEmail((e.target as HTMLTextAreaElement).value)}
						/>
					</div>
				</div>

				<div className='row'>
					<div className='col-md-6 col-sm-6'>
						<TextField name='password' label='Senha' canRevealPassword type='password' onChange={onPasswordChange} />
						<span id='password-check'></span>
					</div>
					<div className='col-md-6 col-sm-6'>
						<TextField name='confirmPassword' label='Confirmar senha' canRevealPassword type='password' onChange={onConfirmPasswordChange} />
						<span id='password-match'></span>
					</div>
				</div>

				{showError}

				<Taskbar buttons={actionButtons()}></Taskbar>
			</form>
		</AccountLayout>
	)
}

// TODO: Converter o password e confirmPassword inputs para um componente do heartthrob-react
export default RegisterPage

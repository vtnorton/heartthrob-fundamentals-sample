import 'heartthrob'
import Card from 'heartthrob-react/src/components/Card/index'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MessageBar, MessageBarType } from '@fluentui/react'

import './AccountLayout.scss'
import { actions } from '../AccountState'
import { selectErrorMessage } from '../AccountSelectors'

interface Props {
	children: any
}

//const dispatch = useDispatch()

export function showError() {
	const errorMessage = useSelector(selectErrorMessage)

	// TODO: verificar mensagme de erro que não está sendo apagada
	const clearError = () => {
		const s = useDispatch()
		s(actions.removeError())
	}

	if (errorMessage) {
		return (
			<>
				<div className='space-low'></div>
				<MessageBar messageBarType={MessageBarType.error} isMultiline={false} onDismiss={clearError} dismissButtonAriaLabel='Close'>
					{errorMessage}
				</MessageBar>
			</>
		)
	}
}

const AccountLayout = (props: Props) => {
	return (
		<section className='account'>
			<Card acrylic={true}>
				<div className='logo'>HFundamentals.Sample</div>
				<hr />
				{props.children}
			</Card>

			<footer className='account-footer'></footer>
		</section>
	)
}
/*
<ul>
					<li>
						<a href='/out/changelog'>©2018 HFundamentals @SystemInformation.GetSystemVersion()</a>
					</li>
					<li>
						<a href='/out/terms'>Termos e política de privacidade</a>
					</li>
				</ul>
*/
export default AccountLayout

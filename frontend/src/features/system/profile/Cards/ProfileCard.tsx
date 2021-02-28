import 'heartthrob'
import { IIconProps, IPersonaSharedProps, Persona, PersonaSize, PrimaryButton, Panel, PanelType } from '@fluentui/react'
import Card from 'heartthrob-react/src/components/Card'
import Taskbar from 'heartthrob-react/src/components/Card/Taskbar/Taskbar'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { selectProfileInfo } from '../ProfileSelectors'
import { ProfileInfo } from '../ProfileTypes'
import { getIntials } from '../../../../shared/utils'
import { actions } from '../ProfileState'
import React from 'react'

const ProfileCard = () => {
	const dispatch = useDispatch()
	dispatch(actions.getProfileInfo())

	const [isOpenedPanel, setOpenedPanel] = useState(false)
	const profileInfo: ProfileInfo = useSelector(selectProfileInfo)

	const profile: IPersonaSharedProps = {
		imageInitials: getIntials(profileInfo.fullName),
		text: profileInfo.fullName,
		secondaryText: profileInfo.email,
		tertiaryText: profileInfo.phoneNumber,
		showInitialsUntilImageLoads: true,
	}

	const changePanelState = () => {
		setOpenedPanel(!isOpenedPanel)
	}

	const editProfile = () => {
		const profileEditIcon: IIconProps = { iconName: 'EditContact' }
		return <PrimaryButton text='Editar Perfil' iconProps={profileEditIcon} onClick={changePanelState} />
	}

	const notInformedTreatment = (text: string) => {
		if (text === null || text === '' || text === undefined) return 'Não informado.'

		return text
	}

	// TODO: Usar shimmer para mostrar os dados sendo carregados
	return (
		<Card>
			<h4>Suas informações</h4>
			<hr />
			<Persona {...profile} size={PersonaSize.size120} />
			<div className='space-low'></div>
			<div className='row'>
				<div className='col-md-4'>
					<p>
						<strong>Data de nascimento</strong>
						<br />

						{notInformedTreatment(profileInfo.birthday?.toISOString())}
					</p>
				</div>

				<div className='col-md-4'>
					<p>
						<strong>Profissão</strong>
						<br />
						{notInformedTreatment(profileInfo.jobTitle)}
					</p>
				</div>
			</div>
			<Taskbar buttons={editProfile()} />

			<Panel
				isOpen={isOpenedPanel}
				onDismiss={changePanelState}
				headerText='Editar perfil'
				closeButtonAriaLabel='Fechar'
				type={PanelType.medium}
				isFooterAtBottom={true}>
				<p>Content goes here.</p>

				<Taskbar buttons={editProfile()} />
			</Panel>
		</Card>
	)
}

export default ProfileCard

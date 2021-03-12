import 'heartthrob'
import { IIconProps, IPersonaSharedProps, Persona, PersonaSize, PrimaryButton, Panel, PanelType, TextField, DatePicker } from '@fluentui/react'
import Card from 'heartthrob-react/src/components/Card'
import { getIntials } from 'heartthrob-react'
import Taskbar from 'heartthrob-react/src/components/Card/Taskbar/Taskbar'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { selectProfileInfo } from '../ProfileSelectors'
import { ProfileInfo } from '../ProfileTypes'
import { actions } from '../ProfileState'

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

	//TODO: fazer componente novo?
	const editProfilePanelContent = () => {
		const [firstName, setFirstName] = useState('')
		const [lastName, setLastName] = useState('')

		return (
			<>
				<div className='row'>
					<div className='col-md-6 col-sm-6'>
						<TextField name='firstName' label='Nome' placeholder='João' onChange={(e) => setFirstName((e.target as HTMLTextAreaElement).value)} />
					</div>
					<div className='col-md-6 col-sm-6'>
						<TextField name='lastName' label='Sobrenome' placeholder='Silva' onChange={(e) => setLastName((e.target as HTMLTextAreaElement).value)} />
					</div>
				</div>
				<div className='row'>
					<div className='col-md-6 col-sm-6'>
						<TextField
							name='firstName'
							label='Profissão'
							placeholder='Advogado'
							onChange={(e) => setFirstName((e.target as HTMLTextAreaElement).value)}
						/>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-6 col-sm-6'>
						<DatePicker label='Data de nascimento' placeholder='30/03/2000' />
					</div>
				</div>
			</>
		)
	}

	const editProfilePanelTaskbar = () => {
		const editProfilePanel = () => {
			const profileEditIcon: IIconProps = { iconName: 'Save' }
			return <PrimaryButton text='Salvar alterações' iconProps={profileEditIcon} onClick={changePanelState} />
		}
		return <Taskbar buttons={editProfilePanel()} />
	}

	const notInformedTreatment = (text: string) => {
		if (text === null || text === '' || text === undefined) 
return 'Não informado.'

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
				isFooterAtBottom={true}
				onRenderFooter={editProfilePanelTaskbar}>
				{editProfilePanelContent()}
			</Panel>
		</Card>
	)
}

export default ProfileCard

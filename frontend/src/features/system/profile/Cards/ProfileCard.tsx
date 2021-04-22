import 'heartthrob'
import { IIconProps, IPersonaSharedProps, Persona, PersonaSize, PrimaryButton } from '@fluentui/react'
import Card from 'heartthrob-react/src/components/Card'
import { notInformedDateTreatment, notInformedTextTreatment, getIntials } from 'heartthrob-react'
import Taskbar from 'heartthrob-react/src/components/Card/Taskbar/Taskbar'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { selectProfileInfo } from '../ProfileSelectors'
import { ProfileInfo } from '../ProfileTypes'
import { actions } from '../ProfileState'
import EditProfilePanel from '../Panels/EditProfilePanel'

const ProfileCard = () => {
	const dispatch = useDispatch()
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
		
	useEffect(() => {
		dispatch(actions.getProfileInfo())
	}, [dispatch])
	
	//if(isLoadingProfile)
	//	return <h4>Carregando...</h4>

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
						{notInformedDateTreatment(profileInfo.birthday)}
					</p>
				</div>

				<div className='col-md-4'>
					<p>
						<strong>Profissão</strong>
						<br />
						{notInformedTextTreatment(profileInfo.jobTitle)}
					</p>
				</div>
			</div>
			<Taskbar buttons={editProfile()} />

			<EditProfilePanel isOpenedPanel={isOpenedPanel} profile={profileInfo} onDismiss={changePanelState}/>
		</Card>
	)
}

export default ProfileCard

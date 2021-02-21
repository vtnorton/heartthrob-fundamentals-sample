import 'heartthrob'
import { IIconProps, IPersonaSharedProps, Persona, PersonaSize, PrimaryButton } from '@fluentui/react'
import Card from 'heartthrob-react/src/components/Card'
import Taskbar from 'heartthrob-react/src/components/Card/Taskbar/Taskbar'
import { useDispatch, useSelector } from 'react-redux'

import { selectProfileInfo } from '../ProfileSelectors'
import { ProfileInfo } from '../ProfileTypes'
import { getIntials } from '../../../../shared/utils'
import { actions } from '../ProfileState'

const ProfileCard = () => {
	const dispatch = useDispatch()
	dispatch(actions.getProfileInfo())

	const profileInfo: ProfileInfo = useSelector(selectProfileInfo)

	const profile: IPersonaSharedProps = {
		imageInitials: getIntials(profileInfo.fullName),
		text: profileInfo.fullName,
		secondaryText: profileInfo.email,
		tertiaryText: profileInfo.phoneNumber,
		showInitialsUntilImageLoads: true,
	}

	const editProfile = () => {
		const profileEditIcon: IIconProps = { iconName: 'EditContact' }
		return <PrimaryButton text='Editar Perfil' iconProps={profileEditIcon} />
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
						{profileInfo.birthday}
					</p>
				</div>

				<div className='col-md-4'>
					<p>
						<strong>Profissão</strong>
						<br />
						{profileInfo.jobTitle}
					</p>
				</div>
			</div>
			<Taskbar buttons={editProfile()} />
		</Card>
	)
}

export default ProfileCard

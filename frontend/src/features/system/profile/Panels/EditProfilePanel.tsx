import { MouseEventHandler, useState } from 'react'
import { TextField, DatePicker, IIconProps, Panel, PanelType } from '@fluentui/react'
import { EditProfileRequest, ProfileInfo } from '../ProfileTypes'
import { actions } from '../ProfileState'
import { useDispatch, useSelector } from 'react-redux'
import { LoadButtonComponent } from 'heartthrob-react'
import { selectIsLoadingEditProfile } from '../ProfileSelectors'
import Taskbar from 'heartthrob-react/src/components/Card/Taskbar/Taskbar'

interface PropsEditProfilePanel {
	isOpenedPanel: boolean,
	onDismiss: MouseEventHandler<any>,
	profile: ProfileInfo,
}

const EditProfilePanel = (props: PropsEditProfilePanel) => {
	const isLoading = useSelector(selectIsLoadingEditProfile)

	const [firstName, setFirstName] = useState(props.profile.firstName)
	const [lastName, setLastName] = useState(props.profile.lastName)
	const [jobTitle, setJobTitle] = useState(props.profile.jobTitle)
	const [birthday, setBirthday] = useState(props.profile.birthday)
	
	const dispatch = useDispatch()
	function editProfile(){
		const newProfile: EditProfileRequest = {
			firstName: firstName,
			lastName: lastName,
			jobTitle: jobTitle,
			birthday: birthday,
			userName: props.profile.userName,
		}

		dispatch(actions.postProfileInfo(newProfile))
	}

	const panelTaskbar = () => {
		const editProfilePanel = () => {
			const profileEditIcon: IIconProps = { iconName: 'Save' }
			return <LoadButtonComponent loadingText='Salvando informações' isLoading={isLoading} text='Salvar alterações' iconProps={profileEditIcon} onClick={editProfile} />
		}

		return <Taskbar buttons={editProfilePanel()} />
	}
	
	const panelContent = () => {
		return (
			<>
				<div className='row'>
					<div className='col-md-6 col-sm-6'>
						<TextField name='firstName' required defaultValue={props.profile.firstName} label='Nome' placeholder='João' onChange={(e) => setFirstName((e.target as HTMLTextAreaElement).value)} />
					</div>
					<div className='col-md-6 col-sm-6'>
						<TextField name='lastName' required defaultValue={props.profile.lastName} label='Sobrenome' placeholder='Silva' onChange={(e) => setLastName((e.target as HTMLTextAreaElement).value)} />
					</div>
				</div>
				<div className='row'>
					<div className='col-md-6 col-sm-6'>
						<TextField
							name='firstName'
							defaultValue={props.profile.jobTitle}
							label='Profissão'
							placeholder='Advogado'
							onChange={(e) => setJobTitle((e.target as HTMLTextAreaElement).value)}/>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-6 col-sm-6'>
						<DatePicker value={props.profile.birthday} 
							label='Data de nascimento' 
							placeholder='30/03/2000' 
							onSelectDate={(date) => setBirthday(date)} />
					</div>
				</div>
			</>
		)
	}

	return (
			<Panel
				isOpen={props.isOpenedPanel}
				onDismiss={props.onDismiss}
				headerText='Editar perfil'
				closeButtonAriaLabel='Fechar'
				type={PanelType.medium}
				isFooterAtBottom={true}
				onRenderFooter={panelTaskbar}>
				{panelContent()}
			</Panel>
	)
}

export default EditProfilePanel
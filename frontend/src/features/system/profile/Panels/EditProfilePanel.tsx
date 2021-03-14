import { MouseEventHandler, useState } from 'react'
import { TextField, DatePicker, PrimaryButton, IIconProps, Panel, PanelType } from '@fluentui/react'
import Taskbar from 'heartthrob-react/src/components/Card/Taskbar/Taskbar'
import { ProfileInfo } from '../ProfileTypes'

interface PropsEditProfilePanel {
	isOpenedPanel: boolean,
	onDismiss: MouseEventHandler<any>,
	profile: ProfileInfo,
}


const EditProfilePanel = (props: PropsEditProfilePanel) => {
	const [firstName, setFirstName] = useState(props.profile.firstName)
	const [lastName, setLastName] = useState(props.profile.lastName)

	const panelTaskbar = () => {

		const editProfilePanel = () => {
			const profileEditIcon: IIconProps = { iconName: 'Save' }
			return <PrimaryButton text='Salvar alterações' iconProps={profileEditIcon} onClick={props.onDismiss} />
		}

		return <Taskbar buttons={editProfilePanel()} />
	}
	
	const panelContent = () => {
		return (
			<>
				<div className='row'>
					<div className='col-md-6 col-sm-6'>
						<TextField name='firstName' value={props.profile.firstName} label='Nome' placeholder='João' onChange={(e) => setFirstName((e.target as HTMLTextAreaElement).value)} />
					</div>
					<div className='col-md-6 col-sm-6'>
						<TextField name='lastName' value={props.profile.lastName} label='Sobrenome' placeholder='Silva' onChange={(e) => setLastName((e.target as HTMLTextAreaElement).value)} />
					</div>
				</div>
				<div className='row'>
					<div className='col-md-6 col-sm-6'>
						<TextField
							name='firstName'
							value={props.profile.jobTitle}
							label='Profissão'
							placeholder='Advogado'
							onChange={(e) => setFirstName((e.target as HTMLTextAreaElement).value)}/>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-6 col-sm-6'>
						<DatePicker value={props.profile.birthday} label='Data de nascimento' placeholder='30/03/2000' />
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
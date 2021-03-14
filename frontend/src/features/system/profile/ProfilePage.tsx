import 'heartthrob'
import ProfileCard from './Cards/ProfileCard'
import SecurityCard from './Cards/SecurityCard'

import './ProfilePage.scss'

const ProfilePage = (): JSX.Element => {
	return (
		<div className='row'>
			<div className='col-lg-6'>
				<ProfileCard />
			</div>
			<div className='col-lg-5'>
				<SecurityCard />
			</div>
		</div>
	)
}

export default ProfilePage

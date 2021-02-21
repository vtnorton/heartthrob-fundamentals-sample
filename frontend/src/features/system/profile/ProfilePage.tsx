import 'heartthrob'
import ProfileCard from './Cards/ProfileCard'
import SecurityCard from './Cards/SecurityCard'

import './ProfilePage.scss'

const ProfilePage = () => {
	return (
		<div className='row'>
			<div className='col-lg-5 col-md-6'>
				<ProfileCard />
			</div>
			<div className='col-lg-4 col-md-5'>
				<SecurityCard />
			</div>
		</div>
	)
}

export default ProfilePage

import 'heartthrob'
import Card from 'heartthrob-react/src/components/Card/index'

import './AccountLayout.scss'

interface Props {
	children: any
}

const AccountLayout = (props: Props) => {
	return (
		<>
			<Card acrylic={true}>
				<div className='logo'>HFundamentals.Sample</div>
				<hr />
				{props.children}
			</Card>

			<footer className='account-footer'>
				<ul>
					<li>
						<a href='/out/changelog'>©2018 HFundamentals @SystemInformation.GetSystemVersion()</a>
					</li>
					<li>
						<a href='/out/terms'>Termos e política de privacidade</a>
					</li>
				</ul>
			</footer>
		</>
	)
}

export default AccountLayout

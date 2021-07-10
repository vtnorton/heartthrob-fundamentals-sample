import { render } from 'react-dom'
import { Provider } from 'react-redux'
import InitHeartthrob from 'heartthrob-fundamentals/core'

import Sagas from './features/sagas'
import Features from './features/routes'
import Reducers from './features/reducers'

import 'heartthrob-fundamentals/core/assets/styles/shell.scss'

const store = InitHeartthrob(Reducers, Sagas, { systemName: 'hearrthrob' })

render(
	<Provider store={store}>
		<Features />
	</Provider>,
	document.getElementById('root'),
)

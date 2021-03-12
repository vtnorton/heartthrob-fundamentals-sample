import { initializeIcons } from '@fluentui/react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Features from './features/routes'
import InitEnv from './init-env'
import InitRedux from './init-redux'
import './assets/styles/index.scss'

const store = InitRedux()
InitEnv()
initializeIcons()

render(
	<Provider store={store}>
		<Features />
	</Provider>,
	document.getElementById('root'),
)

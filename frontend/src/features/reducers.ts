import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import AccountReducer from 'heartthrob-fundamentals/core/features/account/AccountState'
import ProfileReducer from 'heartthrob-fundamentals/core/features/system/profile/ProfileState'
import ShellReducers from 'heartthrob-fundamentals/core/features/shell/ShellState'

const reducers = () => {
	const history = createBrowserHistory()
	return {
		router: connectRouter(history),
		account: AccountReducer,
		profile: ProfileReducer,
		shell: ShellReducers,
	}
}

export default reducers

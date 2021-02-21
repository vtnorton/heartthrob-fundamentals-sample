import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import AccountReducer from './account/AccountState'
import ProfileReducer from './system/profile/ProfileState'

const createRootReducer = (history) =>
	combineReducers({
		router: connectRouter(history),
		account: AccountReducer,
		profile: ProfileReducer,
	})
export default createRootReducer

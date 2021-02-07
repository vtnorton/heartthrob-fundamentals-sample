import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'

import AccountReducer from './account/AccountState'

const createRootReducer = (history) =>
	combineReducers({
		router: connectRouter(history),
		account: AccountReducer,
	})
export default createRootReducer

import { combineReducers } from 'redux'
import AccountReducer from './account/AccountState'

export default combineReducers({
	account: AccountReducer,
})

import { all } from 'redux-saga/effects'
import AccountSaga from './account/AccountSaga'

export default function* () {
	yield all([AccountSaga()])
}

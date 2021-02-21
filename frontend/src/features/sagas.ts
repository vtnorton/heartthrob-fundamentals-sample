import { all } from 'redux-saga/effects'
import AccountSaga from './account/AccountSaga'
import ProfileSaga from './system/profile/ProfileSaga'

export default function* () {
	yield all([AccountSaga(), ProfileSaga()])
}

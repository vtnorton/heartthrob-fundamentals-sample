import { call, put, takeEvery } from 'redux-saga/effects'
import { Result } from '../types'
import AccountServices from './AccountServices'
import { actions } from './AccountState'
import { LoginRequest } from './AccountTypes'

export function* getToken({ payload }: { type: string; payload: LoginRequest }) {
	yield put(actions.removeError())
	yield put(actions.isLoading(true))

	try {
		const response: Result = yield call(AccountServices.LogIn, payload)

		if (!response.succeeded) {
			yield put(actions.setError({ message: response.errors[0] })) //TODO: função para mostrar todo o array
			yield put(actions.isLoading(false))
		} else {
			yield put(actions.setToken({ token: response.value.accessToken }))
		}
	} catch (error) {
		yield call(console.error, 'Houve um erro ao entrar em contato com a API: ', error)
		yield put(actions.setError({ message: 'Houve um erro com o sistema, por favor tente novamente mais tarde.' }))
	} finally {
		yield put(actions.isLoading(false))
	}
}

export default function* () {
	yield takeEvery(actions.getToken.type, getToken)
}

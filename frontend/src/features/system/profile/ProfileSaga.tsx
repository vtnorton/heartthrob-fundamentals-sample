/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { call, put, takeEvery } from 'redux-saga/effects'
import { Result } from '../../types'
import ProfileServices from './ProfileServices'
import { actions } from './ProfileState'
import { ProfileInfo } from './ProfileTypes'

export function* getProfileInfo() {
	yield put(actions.isLoadingProfile(true))

	try {
		const response: Result = yield call(ProfileServices.GetProfile)
		if (!response.succeeded) {
			yield put(actions.setError({ message: response.errors[0] })) //TODO: função para mostrar todo o array
			yield put(actions.isLoadingProfile(false))
		} else {
			yield put(actions.setProfileInfo(response.value))
		}
	} catch (error) {
		yield call(console.error, 'Houve um erro ao entrar em contato com a API: ', error)
		yield put(actions.setError({ message: 'Houve um erro com o sistema, por favor tente novamente mais tarde.' }))
	} finally {
		yield put(actions.isLoadingProfile(false))
	}
}

export function* postProfileInfo({ payload }: { type: string; payload: ProfileInfo }) {
	try {
		const response: Result = yield call(ProfileServices.PostProfile, payload)
		if (!response.succeeded) {
			yield put(actions.setError({ message: response.errors[0] })) //TODO: função para mostrar todo o array
		} else {
			yield put(actions.setProfileInfo(payload))
		}
	} catch (error) {
		yield call(console.error, 'Houve um erro ao entrar em contato com a API: ', error)
		yield put(actions.setError({ message: 'Houve um erro com o sistema, por favor tente novamente mais tarde.' }))
	}
}

export default function* () {
	yield takeEvery(actions.getProfileInfo.type, getProfileInfo)
	yield takeEvery(actions.postProfileInfo.type, postProfileInfo)
}

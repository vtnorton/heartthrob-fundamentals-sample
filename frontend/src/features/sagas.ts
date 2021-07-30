import { all, AllEffect, ForkEffect } from 'redux-saga/effects'
import HeartthrobSagas from 'heartthrob-fundamentals/core/features/sagas'

export default function* (): Generator<AllEffect<Generator<ForkEffect<never>, void, unknown>>, void, unknown> {
	yield all([
		HeartthrobSagas.AccountSaga(),
		HeartthrobSagas.ProfileSaga(),
	])
}

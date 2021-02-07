import {createSelector} from '@reduxjs/toolkit'
import {State} from '../types'
import {AccountState} from './AccountTypes'

const selectFeature = (state: State) => state.account

export const selectErrorMessage = createSelector(selectFeature, (state: AccountState) => state.errorMessage)

export const selectIsLoading = createSelector(selectFeature, (state: AccountState) => state.isLoading)

export const getToken = createSelector(selectFeature, (state: AccountState) => state.token)

export default selectFeature

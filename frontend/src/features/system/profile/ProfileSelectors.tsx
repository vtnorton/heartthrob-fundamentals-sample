import { createSelector } from '@reduxjs/toolkit'
import { State } from '../../types'
import { ProfileState } from './ProfileTypes'

const selectFeature = (state: State) => state.profile

export const selectIsLoadingProfile = createSelector(selectFeature, (state: ProfileState) => state.isLoadingProfile)
export const selectProfileInfo = createSelector(selectFeature, (state: ProfileState) => state.profile)

export default selectFeature

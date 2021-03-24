import { createSelector } from '@reduxjs/toolkit'
import { State } from '../../types'
import { ProfileState } from './ProfileTypes'

const selectFeature = (state: State): ProfileState => state.profile

export const selectIsLoadingProfile = createSelector(selectFeature, (state: ProfileState) => state.isLoadingProfile)
export const selectProfileInfo = createSelector(selectFeature, (state: ProfileState) => state.profile)
export const selectIsLoadingEditProfile = createSelector(selectFeature, (state: ProfileState) => state.isEditProfileLoading)

export default selectFeature

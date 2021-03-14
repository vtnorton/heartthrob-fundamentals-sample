import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProfileInfo, ProfileState } from './ProfileTypes'

const initialState: ProfileState = {
	isLoadingProfile: false,
	isEditProfilePanelOpen: false,
	profile: {
		fullName: '',
		email: '',
		phoneNumber: '',
		jobTitle: '',
		userName: '',
	},
	errorMessage: '',
}

const isLoadingProfile = (state: ProfileState, action: PayloadAction<boolean>) => ({
	...state,
	isLoadingProfile: action.payload,
})

const setError = (state: ProfileState, action: PayloadAction<{ message: string }>) => ({
	...state,
	errorMessage: action.payload.message,
})

const getProfileInfo = (state: ProfileState) => {
	return {
		...state,
		isLoadingProfile: true,
	}
}

const setProfileInfo = (state: ProfileState, action: PayloadAction<ProfileInfo>) => {
	return {
		...state,
		profile: action.payload,
		isLoadingProfile: false,
	}
}

const removeError = (state: ProfileState) => ({
	...state,
	errorMessage: '',
})

const slice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		isLoadingProfile,
		removeError,
		setError,
		getProfileInfo,
		setProfileInfo,
	},
})

export default slice.reducer
export const { actions } = slice

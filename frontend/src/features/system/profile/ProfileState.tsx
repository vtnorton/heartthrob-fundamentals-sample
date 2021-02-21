import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProfileInfo, ProfileState } from './ProfileTypes'

const initialState: ProfileState = {
	isLoadingProfile: false,
	profile: {
		fullName: 'xae',
		email: 'xae',
		phoneNumber: 'aeuhee',
		jobTitle: 'ajfoe',
		userName: 'huuse',
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

const getProfileInfo = (state) => state

const setProfileInfo = (state: ProfileState, action: PayloadAction<ProfileInfo>) => {
	console.log('xs', action.payload)
	return {
		...state,
		profile: action.payload,
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

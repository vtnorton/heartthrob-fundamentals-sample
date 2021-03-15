import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EditProfileRequest, ProfileInfo, ProfileState } from './ProfileTypes'

const initialState: ProfileState = {
	isLoadingProfile: false,
	isEditProfilePanelOpen: false,
	profile: {
		fullName: '',
		email: '',
		phoneNumber: '',
		jobTitle: '',
		userName: '',
		firstName: '',
		lastName: '',
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

const postProfileInfo = (state: ProfileState, action: PayloadAction<EditProfileRequest>) => ({
	...state,
})

const setProfileInfo = (state: ProfileState, action: PayloadAction<ProfileInfo>) => {
	if(`${action.payload.birthday}` === '0001-01-01T00:00:00')
		action.payload.birthday = undefined
		
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
		postProfileInfo,
	},
})

export default slice.reducer
export const { actions } = slice

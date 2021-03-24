export interface ProfileInfo {
	image?: string
	fullName: string
	birthday?: Date
	email: string
	phoneNumber?: string
	userName: string
	jobTitle?: string,
	firstName: string,
	lastName: string
}

export interface EditProfileRequest {
	birthday?: Date
	userName: string
	jobTitle?: string,
	firstName: string,
	lastName: string
}

export interface ProfileState {
	isLoadingProfile: boolean,
	isEditProfilePanelOpen: boolean,
	isEditProfileLoading: boolean,
	profile: ProfileInfo
	errorMessage: string
}

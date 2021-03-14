export interface ProfileInfo {
	image?: string
	fullName: string
	birthday?: Date
	email: string
	phoneNumber?: string
	userName: string
	jobTitle?: string
}

export interface ProfileState {
	isLoadingProfile: boolean,
	isEditProfilePanelOpen: boolean,
	profile: ProfileInfo
	errorMessage: string
}

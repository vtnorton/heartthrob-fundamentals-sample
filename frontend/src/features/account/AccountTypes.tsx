export interface LoginRequest {
	email: string
	password: string
	rememberMe: boolean
}

export interface RegisterRequest {
	email: string
	password: string
	confirmPassword: string
	name: string
	lastName: string
	jobDescription?: string
}

export interface AccountState {
	token: string
	isLoading: boolean
	errorMessage: string
}

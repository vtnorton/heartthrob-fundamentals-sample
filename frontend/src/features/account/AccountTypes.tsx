export interface LoginRequest {
	email: string
	password: string
	rememberMe: boolean
}

export interface RegisterRequest {
	email: string
	password: string
	confirmPassword: string
	firstName: string
	lastName: string
	jobDescription?: string
}

export interface AccountState {
	token: any
	isLoading: boolean
	errorMessage: string
}

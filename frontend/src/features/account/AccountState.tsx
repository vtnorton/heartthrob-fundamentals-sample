import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AccountState, LoginRequest, RegisterRequest } from './AccountTypes'

const initialState: AccountState = {
	token: null,
	isLoading: false,
	errorMessage: '',
}

const getToken = (state: AccountState, action: PayloadAction<LoginRequest>) => ({
	...state,
})

const setToken = (state: AccountState, action: PayloadAction<{ token: string }>) => {
	localStorage.setItem('token', action.payload.token)
	return {
		...state,
	}
}

const createRegister = (state: AccountState, action: PayloadAction<RegisterRequest>) => ({
	...state,
})

const setError = (state: AccountState, action: PayloadAction<{ message: string }>) => ({
	...state,
	errorMessage: action.payload.message,
})

const removeError = (state: AccountState) => ({
	...state,
	errorMessage: '',
})

const isLoading = (state: AccountState, action: PayloadAction<boolean>) => ({
	...state,
	isLoading: action.payload,
})

const slice = createSlice({
	name: 'account',
	initialState,
	reducers: {
		setToken,
		getToken,
		setError,
		removeError,
		isLoading,
		createRegister,
	},
})

export default slice.reducer
export const { actions } = slice

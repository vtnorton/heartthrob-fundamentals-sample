import {ApiWindow, Result} from '../types'
import {LoginRequest, RegisterRequest} from './AccountTypes'

declare const window: ApiWindow

export default {
	async LogIn(request: LoginRequest): Promise<Result> {
		const headers = new Headers()
		headers.append('Content-Type', 'application/json') //TODO: passar para o arquivo fetch.ts
		
		const endpoint = `${window.apis.heartthrob}Account/Authenticate`

		const result: Result = await fetch(endpoint, {method: 'post', body: JSON.stringify(request), headers: headers}).then((response) => {
			return response.json()
		})

		return result
	},

	async Register(request: RegisterRequest): Promise<Result> {
		const headers = new Headers()
		headers.append('Content-Type', 'application/json')

		const endpoint = `${window.apis.heartthrob}Account/Register`

		const result: Result = await fetch(endpoint, {method: 'post', body: JSON.stringify(request), headers: headers}).then((response) => {
			return response.json()
		})

		return result
	},
}

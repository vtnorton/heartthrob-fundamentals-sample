import { ApiWindow, Result } from '../types'
import { LoginRequest } from './AccountTypes'

declare const window: ApiWindow

export default {
	async LogIn(request: LoginRequest): Promise<Result> {
		const headers = new Headers()
		headers.append('Content-Type', 'application/json') //TODO: passar para o arquivo fetch.ts

		let result: Result
		const endpoint = `${window.apis.heartthrob}Account/Authenticate`

		result = await fetch(endpoint, { method: 'post', body: JSON.stringify(request), headers: headers }).then((response) => {
			return response.json()
		})

		return result
	},
}

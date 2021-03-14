import { ApiWindow, Result } from '../../types'

declare const window: ApiWindow

export default {
	async GetProfile(): Promise<Result> {
		const headers = new Headers()
		headers.append('Content-Type', 'application/json') //TODO: passar para o arquivo fetch.ts
		headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'))

		const endpoint = `${window.apis.heartthrob}ManageAccount/Profile`

		const result = await fetch(endpoint, { method: 'get', headers: headers }).then((response) => {
			return response.json()
		})

		return result
	},
}

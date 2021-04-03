import environment from './environments/environment'
import { ApiWindow } from './features/types'

declare let window: ApiWindow

export default async () => {
	window.apis = {
		heartthrob: environment.heartthrob,
	}
}

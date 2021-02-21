import { AccountState } from './account/AccountTypes'
import { ProfileState } from './system/profile/ProfileTypes'

export interface State {
	account: AccountState
	profile: ProfileState
}

export interface ApiWindow extends Window {
	apis: Apis
}

export interface Apis {
	heartthrob: string
}

export interface Result {
	succeeded: boolean
	errors: string[]
	value: any // TODO: Achar uma maneira mais elegante de não usar o any
}

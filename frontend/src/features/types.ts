import { AccountState } from './account/AccountTypes'

export interface State {
	account: AccountState
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

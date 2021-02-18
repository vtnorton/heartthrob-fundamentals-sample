import { IIconProps } from '@fluentui/react'

export interface MenuItemType {
	icon: IIconProps
	name: string
	location?: string
	action?: Function
}

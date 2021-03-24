import { IIconProps, PrimaryButton, Spinner, SpinnerSize } from '@fluentui/react'
import { MouseEventHandler } from 'react'

interface Props {
	isLoading: boolean,
	iconProps: IIconProps,
	onClick: MouseEventHandler<any>,
	text: string,
	loadingText: string,
	children?: JSX.Element,
	disabled?: boolean
}

const LoadButtonComponent = (props: Props): JSX.Element => {
	if (props.isLoading) {
		return (
			<Spinner
				size={SpinnerSize.medium}
				label={props.loadingText}
				ariaLive='assertive'
				labelPosition='right' />
		)
	}

	return (
		<>
			{props.children}
			<PrimaryButton 
				disabled={props.disabled} 
				text={props.text} 
				onClick={props.onClick} 
				iconProps={props.iconProps} />
		</>
	)
}

export default LoadButtonComponent
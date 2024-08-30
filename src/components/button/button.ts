import Block from '../../core/Block';
import template from './button.hbs?raw';

export interface ButtonProps {
	label: string;
	type?: string;
	color?: string;
	onClick?: () => void;
}

class Button extends Block {
	constructor(props: ButtonProps) {
		super({
			...props,
			type: props.type ?? 'button',
			events: {
				click: props.onClick,
			},
		});
	}

	render(): string {
		return template;
	}
}

export default Button;

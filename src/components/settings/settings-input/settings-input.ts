import Block from '../../../core/Block';
import template from './settings-input.hbs?raw';

export interface SettingsInputProps {
	name?: string;
	value: string;
	placeholder?: string;
	onBlur?: (e: Event) => void;
}

class SettingsInput extends Block {
	constructor(props: SettingsInputProps) {
		super({
			...props,
			events: {
				blur: (e: Event) => {
					props.onBlur?.(e);
				},
			},
		});
	}

	render(): string {
		return template;
	}
}

export default SettingsInput;

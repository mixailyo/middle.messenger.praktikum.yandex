import Block from '../../../core/Block';
import { SettingsInput } from '../settings-input';
import template from './settings-info-item.hbs?raw';

export interface SettingsInfoItemProps {
	editable: boolean;
	label: string;
	name?: string;
	value: string;
	placeholder?: string;
	onBlur?: (e: Event) => void;
}

class SettingsInfoItem extends Block {
	constructor(props: SettingsInfoItemProps) {
		super({
			...props,
			SettingsInput: new SettingsInput({
				...props,
				onBlur: (e: Event) => {
					props.onBlur?.(e);
				},
			}),
		});
	}

	render(): string {
		return template;
	}
}

export default SettingsInfoItem;

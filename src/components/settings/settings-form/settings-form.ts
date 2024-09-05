import Block from '../../../core/Block';
import { validation, ValidationRule } from '../../../utils/validation';
import { Button } from '../../button';
import { SettingsInfoItemProps } from '../settings-info-item/settings-info-item';
import SettingsInfoItem from '../settings-info-item/settings-info-item';
import template from './settings-form.hbs?raw';

interface SettingsFormProps {
	editable: boolean;
	info: Omit<SettingsInfoItemProps, 'editable'>[];
	validation: Record<string, ValidationRule>;
}

class SettingsForm extends Block {
	constructor(props: SettingsFormProps) {
		super({
			...props,
			SettingsInfoItems: props.info.map(
				(i) =>
					new SettingsInfoItem({
						...i,
						editable: props.editable,
						onBlur: (e: Event) => {
							this.validationInput((e.target as HTMLInputElement).name);
						},
					})
			),
			SaveButton: new Button({
				type: 'submit',
				label: 'Сохранить',
				color: 'primary',
			}),
			events: {
				submit: (e: Event) => {
					e.preventDefault();
					this.onSubmit(e);
				},
			},
		});
	}

	onSubmit(e: Event) {
		if (this.validationForm()) {
			const formData = new FormData(e.target as HTMLFormElement);
			const formDataObj = Object.fromEntries(
				Array.from(formData.entries()).map(([key, value]) => [key, value])
			);

			console.log(formDataObj);

			this.props.onSubmit(formData);
		}
	}

	validationInput(name: string): boolean {
		const formData = new FormData(
			this.element?.querySelector('form') as HTMLFormElement
		);
		const field = formData.get(name) as string;

		if (validation(field, this.props.validation[name])) {
			this.setInputError(name, '');
		} else {
			this.setInputError(name, this.props.validation[name].errorText);
			return false;
		}

		return true;
	}

	validationForm(): boolean {
		let isValid = true;

		for (const [name] of Object.entries(this.props.validation)) {
			if (!this.validationInput(name)) {
				isValid = false;
			}
		}

		return isValid;
	}

	setInputError(name: string, errorText: string) {
		const input = document.querySelector(`[name=${name}]`);
		if (input) {
			const settingsItem = input.closest('.settings__item');
			const error = settingsItem?.querySelector('.settings__item-error');

			if (error) error.textContent = errorText;
		}
	}

	render(): string {
		return template;
	}
}

export default SettingsForm;

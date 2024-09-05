import Block from '../../core/Block';
import template from './form.hbs?raw';
import { Input } from '../input';
import { Button } from '../button';
import { InputProps } from '../input/input';
import { ButtonProps } from '../button/button';
import { validation, ValidationRule } from '../../utils/validation';

interface FormProps {
	title?: string;
	inputs?: InputProps[];
	buttons?: ButtonProps[];
	onSubmit?: (e: Event) => void;
	validation: Record<string, ValidationRule>;
}

class Form extends Block {
	constructor(props: FormProps) {
		super({
			...props,
			inputs: props.inputs?.map(
				(i) =>
					new Input({
						...i,
						onBlur: (e) => this.validationInput((e.target as HTMLInputElement).name),
					})
			),
			buttons: props.buttons?.map((b) => new Button(b)),
			events: {
				submit: (e: Event) => this.onSubmit(e),
			},
		});
	}

	onSubmit(e: Event) {
		e.preventDefault();

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
		const formData = new FormData(this.element as HTMLFormElement);
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
		const input = (this.children.inputs as Input[]).find(
			(i) => i.props.name === name
		);
		input?.setProps({ errorText });
	}

	render(): string {
		return template;
	}
}

export default Form;

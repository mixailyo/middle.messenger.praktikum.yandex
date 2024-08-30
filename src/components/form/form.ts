import Block from '../../core/Block';
import template from './form.hbs?raw';
import { Input } from '../input';
import { Button } from '../button';
import { InputProps } from '../input/input';
import { ButtonProps } from '../button/button';

interface ValidationRule {
	required: boolean;
	pattern?: RegExp;
	errorText: string;
}

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
		const field = formData.get(name);
		const validation = this.props.validation as Record<string, ValidationRule>;
		const { required, pattern, errorText } = validation[name];

		if ((!field && required) || (pattern && !pattern.test(field as string))) {
			this.setInputError(name, errorText);
			return false;
		} else {
			this.setInputError(name, '');
		}

		return true;
	}

	validationForm(): boolean {
		let isValid = true;

		for (const [name, validation] of Object.entries(this.props.validation)) {
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

import Block from '../../core/Block';

interface InputElementProps {
	type: string;
	name: string;
	onBlur?: (e: Event) => void;
}

class InputElement extends Block {
	constructor(props: InputElementProps) {
		super({
			...props,
			events: {
				blur: props.onBlur,
			},
		});
	}

	render(): string {
		return `
            <input class="input__element" type="{{type}}" name="{{name}}" placeholder="" autocomplete="new-password"/>
        `;
	}
}

export default InputElement;

import Block from '../../core/Block';
import template from './input.hbs?raw';
import InputElement from './input-element';

export interface InputProps {
	type: string;
	name: string;
	label: string;
	errorText?: string;
	onBlur?: (e: Event) => void;
}

class Input extends Block {
	constructor(props: InputProps) {
		super({
			...props,
			InputElement: new InputElement({
				type: props.type,
				name: props.name,
				onBlur: props.onBlur,
			}),
		});
	}

	//   componentDidUpdate(oldProps: any, newProps: any): boolean {
	//     if(oldProps === newProps) {
	//         return false;
	//     }

	//     // this.children.ErrorLine.setProps(newProps);
	//     return true;
	// }

	render(): string {
		return template;
	}
}

export default Input;

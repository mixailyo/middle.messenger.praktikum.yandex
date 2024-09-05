import Block from '../../core/Block';
import template from './error.hbs?raw';

interface ErrorPageProps {
	title: string;
	message: string;
}

class ErrorPage extends Block {
	constructor(props: ErrorPageProps) {
		super({
			...props,
		});
	}

	render(): string {
		return template;
	}
}

export default ErrorPage;

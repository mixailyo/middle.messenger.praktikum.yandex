import { Form } from '../../components/form';
import Block from '../../core/Block';
import template from './login.hbs?raw';

interface LoginPageProps {}

class LoginPage extends Block {
	constructor(props: LoginPageProps) {
		super({
			...props,
			Form: new Form({
				title: 'Вход',
				inputs: [
					{
						type: 'text',
						name: 'login',
						label: 'Логин',
					},
					{
						type: 'password',
						name: 'password',
						label: 'Пароль',
					},
				],
				buttons: [
					{
						type: 'submit',
						label: 'Войти',
						color: 'primary',
					},
					{
						label: 'Зарегистрироваться',
					},
				],
				validation: {
					login: {
						required: true,
						pattern: new RegExp(
							'^(?=[A-Za-z0-9_-]{3,20}$)(?!^\\d+$)[A-Za-z][A-Za-z0-9_-]*$'
						),
						errorText:
							'Логин должен быть от 3 до 20 символов, содержать только латинские буквы, цифры, дефис или нижнее подчеркивание, и не может состоять только из цифр',
					},
					password: {
						required: true,
						pattern: new RegExp('^(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]{8,40}$'),
						errorText:
							'Пароль должен содержать от 8 до 40 символов, включать хотя бы одну заглавную букву и одну цифру',
					},
				},
				onSubmit: (e) => {
					// console.log(e)
				},
			}),
		});
	}

	render(): string {
		return template;
	}
}

export default LoginPage;

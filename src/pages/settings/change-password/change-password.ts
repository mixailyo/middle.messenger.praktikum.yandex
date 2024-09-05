import { SettingsLayout } from '../../../components/settings/settings-layout';
import Block from '../../../core/Block';
import template from './change-password.hbs?raw';

interface ChangePasswordPageProps {}

class ChangePasswordPage extends Block {
	constructor(props: ChangePasswordPageProps) {
		super({
			...props,
			SettingsLayout: new SettingsLayout({
				editable: true,
				name: 'Иван',
				avatar: '/images/default-avatar.svg',
				info: [
					{
						label: 'Старый пароль',
						value: '',
						placeholder: 'Введите старый пароль',
						name: 'oldPassword',
					},
					{
						label: 'Новый пароль',
						value: '',
						placeholder: 'Введите новый пароль',
						name: 'newPassword',
					},
					{
						label: 'Повторите новый пароль',
						value: '',
						placeholder: 'Повторите новый пароль',
					},
				],
				validation: {
					oldPassword: {
						required: true,
						pattern: new RegExp('^(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]{8,40}$'),
						errorText:
							'Пароль должен содержать от 8 до 40 символов, включать хотя бы одну заглавную букву и одну цифру',
					},
					newPassword: {
						required: true,
						pattern: new RegExp('^(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]{8,40}$'),
						errorText:
							'Пароль должен содержать от 8 до 40 символов, включать хотя бы одну заглавную букву и одну цифру',
					},
				},
			}),
		});
	}

	render(): string {
		return template;
	}
}

export default ChangePasswordPage;

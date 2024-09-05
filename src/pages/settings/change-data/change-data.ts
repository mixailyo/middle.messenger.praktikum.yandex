import { SettingsLayout } from '../../../components/settings/settings-layout';
import Block from '../../../core/Block';
import template from './change-data.hbs?raw';

interface ChangeDataPageProps {}

class ChangeDataPage extends Block {
	constructor(props: ChangeDataPageProps) {
		super({
			...props,
			SettingsLayout: new SettingsLayout({
				editable: true,
				name: 'Иван',
				avatar: '/images/default-avatar.svg',
				info: [
					{
						label: 'Почта',
						value: 'pochta@yandex.ru',
						placeholder: 'Введите почту',
						name: 'email',
					},
					{
						label: 'Логин',
						value: 'ivanivanov',
						placeholder: 'Введите логин',
						name: 'login',
					},
					{
						label: 'Имя',
						value: 'Иван',
						placeholder: 'Введите имя',
						name: 'first_name',
					},
					{
						label: 'Фамилия',
						value: 'Иванов',
						placeholder: 'Введите фамилию',
						name: 'second_name',
					},
					{
						label: 'Имя в чате',
						value: 'Иван',
						placeholder: 'Введите имя в чате',
						name: 'display_name',
					},
					{
						label: 'Телефон',
						value: '+7 (909) 967 30 30',
						placeholder: 'Введите телефон',
						name: 'phone',
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
					first_name: {
						required: true,
						pattern: new RegExp('^[A-ZА-Я][a-zA-Zа-яА-Я-]*$'),
						errorText:
							'Имя должно начинаться с заглавной буквы, содержать только буквы (латиница или кириллица) и может включать дефис',
					},
					second_name: {
						required: true,
						pattern: new RegExp('^[A-ZА-Я][a-zA-Zа-яА-Я-]*$'),
						errorText:
							'Фамилия должна начинаться с заглавной буквы, содержать только буквы (латиница или кириллица) и может включать дефис',
					},
					email: {
						required: true,
						pattern: new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
						errorText:
							'Email должен быть в формате example@domain.com, может содержать латинские буквы, цифры и спецсимволы (-, _), обязательно должен содержать «@» и точку после неё',
					},
					phone: {
						required: true,
						pattern: new RegExp('^\\+?\\d{10,15}$'),
						errorText:
							'Телефон должен содержать от 10 до 15 цифр и может начинаться с плюса',
					},
				},
			}),
		});
	}

	render(): string {
		return template;
	}
}

export default ChangeDataPage;

import { SettingsLayout } from '../../components/settings/settings-layout';
import Block from '../../core/Block';
import template from './settings.hbs?raw';

interface SettingsPageProps {}

class SettingsPage extends Block {
	constructor(props: SettingsPageProps) {
		super({
			...props,
			SettingsLayout: new SettingsLayout({
				editable: false,
				name: 'Иван',
				avatar: '/images/default-avatar.svg',
				info: [
					{
						label: 'Почта',
						value: 'pochta@yandex.ru',
					},
					{
						label: 'Логин',
						value: 'ivanivanov',
					},
					{
						label: 'Имя',
						value: 'Иван',
					},
					{
						label: 'Фамилия',
						value: 'Иванов',
					},
					{
						label: 'Имя в чате',
						value: 'Иван',
					},
					{
						label: 'Телефон',
						value: '+7 (909) 967 30 30',
					},
				],
			}),
		});
	}

	render(): string {
		return template;
	}
}

export default SettingsPage;

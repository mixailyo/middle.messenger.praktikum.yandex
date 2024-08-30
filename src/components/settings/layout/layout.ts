import Block from '../../../core/Block';
import { Button } from '../../button';
import { Modal } from '../../modal';
import template from './layout.hbs?raw';

interface SettingsLayoutProps {
	editable?: boolean;
	name: string;
	avatar: string;
	info: {
		label: string;
		value: string;
		placeholder?: string;
		name?: string;
	}[];
}

class SettingsLayout extends Block {
	constructor(props: SettingsLayoutProps) {
		super({
			...props,
			changeAvatarModal: new Modal({
				name: 'changeAvatarModal',
				title: 'Сменить аватар',
				content:
					'<button class="settings__action">Выбрать файл на компьютере</button>',
			}),
			SaveButton: new Button({
				label: 'Сохранить',
				color: 'primary',
			}),
		});
	}

	render(): string {
		return template;
	}
}

export default SettingsLayout;

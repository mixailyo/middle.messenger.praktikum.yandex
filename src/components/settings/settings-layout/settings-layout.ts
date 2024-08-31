import Block from '../../../core/Block';
import { ValidationRule } from '../../../utils/validation';
import { Modal } from '../../modal';
import SettingsForm from '../settings-form/settings-form';
import { SettingsInfoItemProps } from '../settings-info-item/settings-info-item';
import template from './settings-layout.hbs?raw';

interface SettingsLayoutProps {
	editable: boolean;
	name: string;
	avatar: string;
	info: Omit<SettingsInfoItemProps, 'editable'>[];
	validation: Record<string, ValidationRule>;
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
			SettingsForm: new SettingsForm({
				editable: props.editable,
				info: props.info,
				validation: props.validation,
			})
		});
	}

	render(): string {
		return template;
	}
}

export default SettingsLayout;

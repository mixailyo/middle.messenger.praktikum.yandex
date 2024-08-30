import { SettingsLayout } from "../../../components/settings/layout";
import Block from "../../../core/Block";
import template from "./change-data.hbs?raw";

interface ChangeDataPageProps {
}

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
                name: 'email'
              },
              {
                label: 'Логин',
                value: 'ivanivanov',
                placeholder: 'Введите логин',
                name: 'login'
              },
              {
                label: 'Имя',
                value: 'Иван',
                placeholder: 'Введите имя',
                name: 'first_name'
              },
              {
                label: 'Фамилия',
                value: 'Иванов',
                placeholder: 'Введите фамилию',
                name: 'second_name'
              },
              {
                label: 'Имя в чате',
                value: 'Иван',
                placeholder: 'Введите имя в чате',
                name: 'display_name'
              },
              {
                label: 'Телефон',
                value: '+7 (909) 967 30 30',
                placeholder: 'Введите телефон',
                name: 'phone'
              },
            ]
          }),
        })
    }

    render(): string {
        return template
    }
}

export default ChangeDataPage;
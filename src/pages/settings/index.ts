export { default as SettingsPage } from './settings.hbs?raw'

const context = {
  name: 'Иван',
  avatar: '/images/default-avatar.svg',
  info: [
    {
      label: 'Почта',
      value: 'pochta@yandex.ru'
    },
    {
      label: 'Логин',
      value: 'ivanivanov'
    },
    {
      label: 'Имя',
      value: 'Иван'
    },
    {
      label: 'Фамилия',
      value: 'Иванов'
    },
    {
      label: 'Имя в чате',
      value: 'Иван'
    },
    {
      label: 'Телефон',
      value: '+7 (909) 967 30 30'
    },
  ]
}

export { context }

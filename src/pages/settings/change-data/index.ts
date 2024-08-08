export { default as ChangeDataPage } from './change-data.hbs?raw'

const context = {
  name: 'Иван',
  avatar: 'src/assets/images/default-avatar.svg',
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
}

export { context }

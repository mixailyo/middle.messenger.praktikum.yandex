export { default as ChangePasswordPage } from './change-password.hbs?raw'

const context = {
  name: 'Иван',
  avatar: 'src/assets/images/default-avatar.svg',
  info: [
    {
      label: 'Старый пароль',
      value: '',
      placeholder: 'Введите старый пароль',
      name: 'oldPassword'
    },
    {
      label: 'Новый пароль',
      value: '',
      placeholder: 'Введите новый пароль',
      name: 'newPassword'
    },
    {
      label: 'Повторите новый пароль',
      value: '',
      placeholder: 'Повторите новый пароль'
    },
  ]
}

export { context }

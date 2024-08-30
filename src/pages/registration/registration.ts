import { Form } from "../../components/form";
import Block from "../../core/Block";
import template from "./registration.hbs?raw";

interface RegistrationPageProps {}

class RegistrationPage extends Block {
    constructor(props: RegistrationPageProps) {
        super({
            ...props,
            Form: new Form({
                title: 'Регистрация',
                inputs: [
                  {
                    type: 'email',
                    name: 'email',
                    label: 'Почта',
                  },
                  {
                    type: 'text',
                    name: 'login',
                    label: 'Логин',
                  },
                  {
                    type: 'text',
                    name: 'first_name',
                    label: 'Имя',
                  },
                  {
                    type: 'text',
                    name: 'second_name',
                    label: 'Фамилия',
                  },
                  {
                    type: 'phone',
                    name: 'phone',
                    label: 'Телефон',
                  },
                  {
                    type: 'password',
                    name: 'password',
                    label: 'Пароль',
                  },
                  {
                    type: 'password',
                    name: 'repeat-password',
                    label: 'Пароль (ещё раз)',
                  }
                ],
                buttons: [
                  {
                    type: 'submit',
                    label: 'Зарегистрироваться',
                    color: 'primary',
                  },
                  {
                    label: 'Войти',
                  } 
                ],
                validation: {
                  login: {
                      required: true,
                      pattern: new RegExp('^(?=[A-Za-z0-9_-]{3,20}$)(?!^\\d+$)[A-Za-z][A-Za-z0-9_-]*$'),
                      errorText: 'Логин должен быть от 3 до 20 символов, содержать только латинские буквы, цифры, дефис или нижнее подчеркивание, и не может состоять только из цифр'
                  },
                  password: {
                      required: true,
                      pattern: new RegExp('^(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]{8,40}$'),
                      errorText: 'Пароль должен содержать от 8 до 40 символов, включать хотя бы одну заглавную букву и одну цифру'
                  },
                  first_name: {
                      required: true,
                      pattern: new RegExp('^[A-ZА-Я][a-zA-Zа-яА-Я-]*$'),
                      errorText: 'Имя должно начинаться с заглавной буквы, содержать только буквы (латиница или кириллица) и может включать дефис'
                  },
                  second_name: {
                      required: true,
                      pattern: new RegExp('^[A-ZА-Я][a-zA-Zа-яА-Я-]*$'),
                      errorText: 'Фамилия должна начинаться с заглавной буквы, содержать только буквы (латиница или кириллица) и может включать дефис'
                  },
                  email: {
                      required: true,
                      pattern: new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
                      errorText: 'Email должен быть в формате example@domain.com, может содержать латинские буквы, цифры и спецсимволы (-, _), обязательно должен содержать «@» и точку после неё'
                  },
                  phone: {
                      required: true,
                      pattern: new RegExp('^\\+?\\d{10,15}$'),
                      errorText: 'Телефон должен содержать от 10 до 15 цифр и может начинаться с плюса'
                  }
              },
                onSubmit: (e) => {
                  // console.log(e)
                }
            })
        })
    }

    render(): string {
        return template
    }
}

export default RegistrationPage;
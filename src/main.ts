import './style.scss'
import Handlebars from 'handlebars';
import * as Pages from './pages';
declare global {
  export type Keys<T extends Record<string, unknown>> = keyof T;
  export type Values<T extends Record<string, unknown>> = T[Keys<T>];
}

const pages = {
  'navigate': [ Pages.NavigatePage ],
  'login': [ Pages.LoginPage ],
  'registration': [ Pages.RegistrationPage ],
  'chats': [ Pages.ChatsPage ],
  'settings': [ Pages.SettingsPage ],
  'change-data': [ Pages.ChangeDataPage ],
  'change-password': [ Pages.ChangePasswordPage ],
  '404': [ Pages.ErrorPage, {title: '404', message: 'Не туда попали'} ],
  '500': [ Pages.ErrorPage, {title: '500', message: 'Мы уже фиксим'} ],
};

function navigate(page: string) {
  //@ts-ignore
  const [ source, context ] = pages[page];
  const container = document.getElementById('app')!;

  if(source instanceof Object) {
    const page = new source(context);
    container.innerHTML = '';
    container.append(page.getContent());
    // page.dispatchComponentDidMount();
    return;
  }

  container.innerHTML = Handlebars.compile(source)(context);
}

document.addEventListener('DOMContentLoaded', () => navigate('navigate'));

document.addEventListener('click', e => {
  //@ts-ignore
  const page = e.target.getAttribute('page');
  if (page) {
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});

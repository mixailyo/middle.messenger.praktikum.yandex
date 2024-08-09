import './style.scss'
import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';

import { context as settingsPageContext } from './pages/settings';
import { context as changeDataPageContext } from './pages/settings/change-data';
import { context as changePasswordPageContext } from './pages/settings/change-password';

const pages = {
  'navigate': [ Pages.NavigatePage ],
  'login': [ Pages.LoginPage ],
  'registration': [ Pages.RegistrationPage ],
  'chats': [ Pages.ErrorPage, {title: 'Страница-заглушка', message: 'Страницу со списком чатов и лентой переписки мы сделаем в следующем спринте'} ],
  'settings': [ Pages.SettingsPage, settingsPageContext ],
  'change-data': [ Pages.ChangeDataPage, changeDataPageContext ],
  'change-password': [ Pages.ChangePasswordPage, changePasswordPageContext ],
  '404': [ Pages.ErrorPage, {title: '404', message: 'Не туда попали'} ],
  '500': [ Pages.ErrorPage, {title: '500', message: 'Мы уже фиксим'} ],
};

Object.entries(Components).forEach(([ name, component ]) => {
  Handlebars.registerPartial(name, component);
});

function navigate(page: string) {
  //@ts-ignore
  const [ source, context ] = pages[page];
  const container = document.getElementById('app')!;
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

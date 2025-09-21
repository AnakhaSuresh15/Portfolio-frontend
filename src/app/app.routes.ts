import { Routes } from '@angular/router';
import { Main } from './components/main/main';
import { AboutMe } from './components/about-me/about-me';
import { Experience } from './components/experience/experience';
import { Contact } from './components/contact/contact';
import { NotFound } from './components/not-found/not-found';
import { Home } from './components/home/home';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'about-me',
    component: AboutMe,
  },
  {
    path: 'skills',
    component: Experience,
  },
  {
    path: 'contact',
    component: Contact,
  },
  {
    path: '**',
    component: NotFound,
  },
];

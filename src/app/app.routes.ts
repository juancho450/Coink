import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadComponent: () => import('./core/auth/auth.page').then( m => m.AuthPage)
  },
  {
    path: 'register/phone-number',
    loadComponent: () => import('./feature/register/register-phone-number/register-phone-number.page').then( m => m.RegisterPage)
  },
  {
    path: 'register/account',
    loadComponent: () => import('./feature/register/register-account/register-account.page').then( m => m.RegisterAccountPage)
  },
  {
    path: 'register/finalize',
    loadComponent: () => import('./feature/register/register-finalize/register-finalize.page').then( m => m.RegisterFinalizePage)
  },
];

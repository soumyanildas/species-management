import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  {
    path: 'auth',
    loadComponent: () => import('./pages/auth/auth.component').then((c) => c.AuthComponent),
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        loadComponent: () => import('./pages/auth/login/login.component').then((c) => c.LoginComponent),
      },
      {
        path: 'forgot-password',
        loadComponent: () => import('./pages/auth/forgot-password/forgot-password.component').then((c) => c.ForgotPasswordComponent),
      }
    ]
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.component').then((c) => c.DashboardComponent),
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadComponent: () => import('./pages/dashboard/home/home.component').then((c) => c.HomeComponent),
      },
      {
        path: 'alert-configuration',
        loadComponent: () => import('./pages/dashboard/alert-configuration/alert-configuration.component').then((c) => c.AlertConfigurationComponent),
      },
    ]
  }
];

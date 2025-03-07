import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Dashboard } from './app/pages/dashboard/dashboard';
import { Documentation } from './app/pages/documentation/documentation';
import { Landing } from './app/pages/landing/landing';
import { Notfound } from './app/pages/notfound/notfound';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', component: Dashboard },
            { path: 'uikit', loadChildren: () => import('./app/pages/uikit/uikit.routes') },
            { path: 'documentation', component: Documentation },
            { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') }
        ]
    },

    {
        path: 'page',
        component: AppLayout,
        children: [
            {
                path: 'patients',
                loadComponent: () => import('./app/pages/patiens/patiens.component').then((p) => p.PatiensComponent)
            },
            {
                path: 'doctors',
                loadComponent: () => import('.//app/pages/doctors/doctors.component').then((d) => d.DoctorsComponent)
            },
            {
                path: 'appointments',
                loadComponent: () => import('./app/pages/appointments/appointments.component').then((a) => a.AppointmentsComponent)
            }
        ]
    },

    { path: 'landing', component: Landing },
    { path: 'notfound', component: Notfound },
    { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
    { path: '**', redirectTo: '/notfound' }
];

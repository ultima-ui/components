import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Documentation'
    },
    loadComponent: () => import('./common/common.component').then(c => c.CommonComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'overview'
      },
      {
        path: 'overview',
        data: {
          breadcrumb: 'Overview'
        },
        loadComponent: () => import('./overview/overview.component').then(c => c.OverviewComponent),
      },
      {
        path: 'apps',
        data: {
          breadcrumb: 'Apps'
        },
        loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule),
      },
      {
        path: 'components',
        data: {
          breadcrumb: 'Components'
        },
        loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule),
      }
    ]
  }
];

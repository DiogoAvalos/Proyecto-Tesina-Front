import { Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/services/auth.guard';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('../../modules/dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'components',
                loadChildren: () => import('../../components/components.module').then(m => m.ComponentsModule)
            },
            {
                path: 'forms',
                loadChildren: () => import('../../forms/forms.module').then(m => m.FormsModule)
            },
            {
                path: 'widgets',
                loadChildren: () => import('../../widgets/widgets.module').then(m => m.WidgetsModule)
            },
            {
                path: 'charts',
                loadChildren: () => import('../../charts/charts.module').then(m => m.ChartsModule)
            },
            {
                path: 'profile',
                loadChildren: () => import('../../modules/profile/profile.module').then(m => m.ProfileModule)
            },
            {
                path: 'modules',
                loadChildren: () => import('../../modules/modules-routing.module').then(m => m.ModuleRoutingModule)
            }
        ]
    }
]

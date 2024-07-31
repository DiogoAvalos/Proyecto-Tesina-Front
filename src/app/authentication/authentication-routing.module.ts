import { PageServerErrorComponent } from './page-server-error/page-server-error.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageForbiddenComponent } from './page-forbidden/page-forbidden.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageServerForbiddenComponent } from './page-server-forbidden/page-server-forbidden.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: ':: Iconic Angular :: Ready APP ::' },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { title: ':: Iconic Angular :: Ready APP ::' },
  },
  {
    path: 'lock-screen',
    component: LockscreenComponent,
    data: { title: ':: Iconic Angular :: Ready APP ::' },
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    data: { title: ':: Iconic Angular :: Ready APP ::' },
  },
  {
    path: 'page-404',
    component: PageNotFoundComponent,
    data: { title: ':: Iconic Angular :: Ready APP ::' },
  },
  {
    path: 'page-403',
    component: PageForbiddenComponent,
    data: { title: ':: Iconic Angular :: Ready APP ::' },
  },
  {
    path: 'page-500',
    component: PageServerErrorComponent,
    data: { title: ':: Iconic Angular :: Ready APP ::' },
  },
  {
    path: 'page-503',
    component: PageServerForbiddenComponent,
    data: { title: ':: Iconic Angular :: Ready APP ::' },
  },
  {
    path: 'maintenance',
    component: MaintenanceComponent,
    data: { title: ':: Iconic Angular :: Ready APP ::' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}

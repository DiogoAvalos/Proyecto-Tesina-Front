import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageForbiddenComponent } from './page-forbidden/page-forbidden.component';
import { PageServerErrorComponent } from './page-server-error/page-server-error.component';
import { PageServerForbiddenComponent } from './page-server-forbidden/page-server-forbidden.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LockscreenComponent,
    ForgotPasswordComponent,
    PageNotFoundComponent,
    PageForbiddenComponent,
    PageServerErrorComponent,
    PageServerForbiddenComponent,
    MaintenanceComponent,
  ],
  imports: [CommonModule, AuthenticationRoutingModule],
})
export class AuthenticationModule {}

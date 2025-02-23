import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { MatModule } from 'src/app/appModules/mat.module';
import { CoverForgotPasswordComponent } from './login/cover-forgot-password/cover-forgot-password.component';
import { CoverResetPasswordComponent } from './login/cover-reset-password/cover-reset-password.component';
import { CoverSigninComponent } from './login/iniciar-sesion/iniciar-sesion.component';
import { CoverSignupComponent } from './login/cover-signup/cover-signup.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatModule,
    CoverSigninComponent,
    CoverSignupComponent,
    CoverForgotPasswordComponent,
    CoverResetPasswordComponent
  ]
})
export class AuthModule { }

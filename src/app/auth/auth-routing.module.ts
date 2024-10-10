import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './login/reset-password/reset-password.component';
import { CoverSigninComponent } from './login/cover-signin/cover-signin.component';
import { CoverSignupComponent } from './login/cover-signup/cover-signup.component';
import { CoverForgotPasswordComponent } from './login/cover-forgot-password/cover-forgot-password.component';
import { CoverResetPasswordComponent } from './login/cover-reset-password/cover-reset-password.component';
// import { SigninWithHeaderFooterComponent } from './signin-with-header-footer/signin-with-header-footer.component';
// import { SignupWithHeaderFooterComponent } from './signup-with-header-footer/signup-with-header-footer.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'cover-signin', component: CoverSigninComponent, title: 'Iniciar Sesión' },
      { path: 'cover-signup', component: CoverSignupComponent, title: 'Cover Sign Up' },
      { path: 'forgot-password', component: ForgotPasswordComponent, title: 'Forgot Password' },
      { path: 'cover-forgot-password', component: CoverForgotPasswordComponent, title: 'Cover Forgot Password' },
      { path: 'reset-password', component: ResetPasswordComponent, title: 'Reset Password'  },
      { path: 'cover-reset-password', component: CoverResetPasswordComponent, title: 'Cover Reset Password' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

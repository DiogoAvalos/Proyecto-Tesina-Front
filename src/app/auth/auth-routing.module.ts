import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
      { path: 'cover-forgot-password', component: CoverForgotPasswordComponent, title: 'Recuperar Contraseña' },
      { path: 'cover-reset-password', component: CoverResetPasswordComponent, title: 'Restablecer Contraseña' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }

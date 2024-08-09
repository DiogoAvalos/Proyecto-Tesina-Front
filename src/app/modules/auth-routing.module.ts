import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { UserProfileComponent } from './profile/user-profile/user-profile.component';
// import { SigninWithHeaderFooterComponent } from './signin-with-header-footer/signin-with-header-footer.component';
// import { SignupWithHeaderFooterComponent } from './signup-with-header-footer/signup-with-header-footer.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path:'registrar-usuario',
        component: RegistrarUsuarioComponent,
        data: {
          title: 'Registrar Usuario'
        }
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'user-profile',
        component:  UserProfileComponent,
        data: {
          title: 'Perfil de Usuario'
        }
      }
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

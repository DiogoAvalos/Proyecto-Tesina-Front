import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './profile/user-profile/user-profile.component';
import { RegistrarProductoComponent } from './registrar-producto/registrar-producto.component';
import { RegistrarUsuarioComponent } from './configuracion/registrar-usuario/registrar-usuario.component';
// import { SigninWithHeaderFooterComponent } from './signin-with-header-footer/signin-with-header-footer.component';
// import { SignupWithHeaderFooterComponent } from './signup-with-header-footer/signup-with-header-footer.component';

const routes: Routes = [
  { path: 'registrar-usuario', component: RegistrarUsuarioComponent, title: 'Registrar Usuario' },
  { path: 'user-profile', component:  UserProfileComponent, title: 'Perfil de Usuario' },
  { path: 'registrar-medico', component: RegistrarProductoComponent, title: 'Registrar Medico' },
  { path: 'fichero', loadChildren: () => import('./ficheros/ficheros-routing.module').then(m => m.FicherosRoutingModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ModuleRoutingModule { }

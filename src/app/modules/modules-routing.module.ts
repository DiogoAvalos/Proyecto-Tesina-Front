import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './profile/user-profile/user-profile.component';
import { RegistrarProductoComponent } from './registrar-producto/registrar-producto.component';
// import { SigninWithHeaderFooterComponent } from './signin-with-header-footer/signin-with-header-footer.component';
// import { SignupWithHeaderFooterComponent } from './signup-with-header-footer/signup-with-header-footer.component';

const routes: Routes = [
  { path: 'user-profile', component:  UserProfileComponent, title: 'Perfil de Usuario' },
  { path: 'registrar-productos', component: RegistrarProductoComponent, title: 'Registrar Productos' },
  { path: 'fichero', loadChildren: () => import('./ficheros/ficheros-routing.module').then(m => m.FicherosRoutingModule) },
  { path: 'configuracion', loadChildren: () => import('./configuracion/configuracion-routing.module').then(m => m.ConfiguracionesRoutingModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ModuleRoutingModule { }

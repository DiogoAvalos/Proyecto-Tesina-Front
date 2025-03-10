import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './profile/user-profile/user-profile.component';
import { RegistrarProductoComponent } from './registrar-producto/registrar-producto.component';
// import { SigninWithHeaderFooterComponent } from './signin-with-header-footer/signin-with-header-footer.component';
// import { SignupWithHeaderFooterComponent } from './signup-with-header-footer/signup-with-header-footer.component';

const routes: Routes = [
  { path: 'user-profile', component:  UserProfileComponent, title: 'Perfil de Usuario' },
  { path: 'listar-productos', component: RegistrarProductoComponent, title: 'Lista de Productos' },
  { path: 'fichero', loadChildren: () => import('./ficheros/ficheros.module').then(m => m.FicheroModule) },
  { path: 'configuracion', loadChildren: () => import('./configuracion/configuracion.module').then(m => m.ConfiguracionModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ModuleRoutingModule { }

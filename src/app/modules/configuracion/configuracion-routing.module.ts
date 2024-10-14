import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolComponent } from './rol/rol.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { MenuItemComponent } from './menu-item/menu-item.component';

const routes: Routes = [
  { path: 'registrar-usuario', component: RegistrarUsuarioComponent, title: 'Registrar Usuario' },
  { path: 'rol', component:  RolComponent, title: 'Roles' },
  { path: 'menu-item', component: MenuItemComponent, title: 'Lista de menús activos' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ConfiguracionesRoutingModule { }

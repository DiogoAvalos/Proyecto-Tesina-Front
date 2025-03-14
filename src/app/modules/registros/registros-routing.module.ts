import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroVentaComponent } from './registro-venta/registro-venta.component';
import { FormularioVentaComponent } from './formulario-venta/formulario-venta.component';

const routes: Routes = [
  { path: 'registrar-venta', component: RegistroVentaComponent, title: 'Listado de Ventas' },
  { path: 'formulario-venta', component: FormularioVentaComponent, title: 'Registrar Venta' },
  // { path: 'rol', component:  RolComponent, title: 'Roles' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RegistrosRoutingModule { }

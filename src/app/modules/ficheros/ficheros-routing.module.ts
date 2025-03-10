import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisComponent } from './pais/pais.component';
import { TipoDocumentoComponent } from './tipo-documento/tipo-documento.component';

const routes: Routes = [
  { path: 'tipo-documento', component: TipoDocumentoComponent, title: 'Tipo de Documento' },
  { path: 'pais', component:  PaisComponent, title: 'Países' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FicherosRoutingModule { }

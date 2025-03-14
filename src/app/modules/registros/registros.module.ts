import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatModule } from 'src/app/appModules/mat.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegistrosRoutingModule } from './registros-routing.module';
import { RegistroVentaComponent } from './registro-venta/registro-venta.component';
import { FormularioVentaComponent } from './formulario-venta/formulario-venta.component';


@NgModule({
  declarations: [
    RegistroVentaComponent,
    FormularioVentaComponent,
  ],
  imports: [
    RegistrosRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    MatModule,
    SharedModule
  ]
})

export class RegistrosModule { }

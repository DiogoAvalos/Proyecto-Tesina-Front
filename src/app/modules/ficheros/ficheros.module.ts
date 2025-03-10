import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FicherosRoutingModule } from './ficheros-routing.module';
import { MatModule } from 'src/app/appModules/mat.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TipoDocumentoComponent } from './tipo-documento/tipo-documento.component';

@NgModule({
  declarations: [
    TipoDocumentoComponent
  ],
  imports: [
    FicherosRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    MatModule,
    SharedModule,
  ]
})
export class FicheroModule { }

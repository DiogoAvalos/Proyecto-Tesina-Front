import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarUsuarioComponent } from './configuracion/registrar-usuario/registrar-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatModule } from '../appModules/mat.module';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule
  ],
})

export class ModulesRoutingModule { }

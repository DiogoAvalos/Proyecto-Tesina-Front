import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatModule } from '../appModules/mat.module';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ModuleRoutingModule } from './modules-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    ModuleRoutingModule,
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

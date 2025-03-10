import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatModule } from 'src/app/appModules/mat.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { ConfiguracionesRoutingModule } from './configuracion-routing.module';
import { RolComponent } from './rol/rol.component';
import { MenuItemComponent } from './menu-item/menu-item.component';

@NgModule({
  declarations: [
    RegistrarUsuarioComponent,
    RolComponent,
    MenuItemComponent,
  ],
  imports: [
    ConfiguracionesRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    MatModule,
    SharedModule
  ]
})

export class ConfiguracionModule { }

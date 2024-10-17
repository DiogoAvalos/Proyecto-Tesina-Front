import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { MatModule } from 'src/app/appModules/mat.module';
import { SweetAlertService } from 'src/app/auth/services/sweetAlertService.service';
import { UserService } from 'src/app/auth/services/userService.service';
import { ValidacionService } from 'src/app/auth/services/validacion.service';
import { ModalComponent } from 'src/app/shared/modal-component/modal-component.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SortingTableColumnComponent } from 'src/app/shared/sorting-table/sorting-table-column.interface';
import { formRol } from '../formulario';
import { Accesos, Roles } from 'src/app/auth/interfaces/usuario';

@Component({
  standalone: true,
  imports: [ SharedModule, ReactiveFormsModule, MatModule, CommonModule ],
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css']
})

export class RolComponent implements OnInit {
  SA = inject(SweetAlertService)
  FB = inject(FormBuilder)
  US = inject(UserService)
  VA = inject(ValidacionService)

  @ViewChild('modal') modal: ModalComponent

  dataRoles: any
  estadoModal: string = ''
  rol: any
  formRol: FormGroup = formRol()

  columnas: Array<SortingTableColumnComponent> = [
    { name: 'id', display: 'ID' },
    { name: 'nombre_rol', display: 'NOMBRE DE ROL' },
    { name: 'editar', display: 'EDITAR', accion: 'editar', icon: 'edit' }
  ]

  constructor() { }

  ngOnInit() {
    this.loadTabla()
  }

  loadTabla = async() => this.dataRoles = await firstValueFrom(this.US.getRoles())

  accion([a, data, i]){
    if(a.accion == 'editar'){
      this.modal.showModal()
      this.estadoModal = 'Editar Rol'
    }
  }

  registroNuevo(){
  }

  readonly roles = signal<Roles>({
    id: 1,
    nombre_rol: 'Admin',
    accesos: [
      { id: 1, label: 'Dashboard', icon: 'dashboard', router_link: '/dashboard', completed: false },
      { id: 2, label: 'Users', icon: 'people', router_link: '/users', completed: false },
      { id: 3, label: 'Settings', icon: 'settings', router_link: '/settings', completed: false },
    ],
  })
  
  readonly partiallyComplete = computed(() => {
    const roles = this.roles()
    if (!roles.accesos) {
      return false
    }
    return roles.accesos.some(a => a.completed) && !roles.accesos.every(a => a.completed)
  });
  
  update(completed: boolean, index?: number) {
    this.roles.update(roles => {
      if (index === undefined) {
        roles.accesos?.forEach(a => (a.completed = completed))
      } else {
        roles.accesos![index].completed = completed
      }
      console.log("ROLES ->",roles)
      return { ...roles }
    });
  }

  allAccesosCompleted(): boolean {
    const roles = this.roles()
    return roles.accesos.every(a => a.completed)
  }
}

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
import { Accesos } from 'src/app/auth/interfaces/usuario';

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

  //! TEST
  readonly task = signal<Accesos>({
    name: 'Parent task',
    completed: false,
    subtasks: [
      {name: 'Child task 1', completed: false},
      {name: 'Child task 2', completed: false},
      {name: 'Child task 3', completed: false},
    ],
  });

  //! TEST
  readonly partiallyComplete = computed(() => {
    const task = this.task();
    if (!task.subtasks) {
      return false;
    }
    return task.subtasks.some(t => t.completed) && !task.subtasks.every(t => t.completed);
  });

  //! TEST
  update(completed: boolean, index?: number) {
    this.task.update(task => {
      if (index === undefined) {
        task.completed = completed;
        task.subtasks?.forEach(t => (t.completed = completed));
      } else {
        task.subtasks![index].completed = completed;
        task.completed = task.subtasks?.every(t => t.completed) ?? true;
      }
      return {...task};
    });
  }
}

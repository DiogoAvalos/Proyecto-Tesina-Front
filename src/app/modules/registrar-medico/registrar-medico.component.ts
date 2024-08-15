import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { firstValueFrom, Observable, tap } from 'rxjs';
import { MatModule } from 'src/app/appModules/mat.module';
import { FicheroSevice } from 'src/app/auth/services/ficheroSevice.service';
import { SweetAlertService } from 'src/app/auth/services/sweetAlertService.service';
import { UserService } from 'src/app/auth/services/userService.service';
import { ModalComponent } from 'src/app/shared/modal-component/modal-component.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SortingTableColumnComponent } from 'src/app/shared/sorting-table/sorting-table-column.interface';

@Component({
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule, MatModule, SharedModule ],
  selector: 'app-registrar-medico',
  templateUrl: './registrar-medico.component.html',
  styleUrls: ['./registrar-medico.component.scss']
})

export class RegistrarMedicoComponent implements OnInit {
  SA = inject(SweetAlertService)
  FB = inject(FormBuilder)
  FS = inject(FicheroSevice)
  US = inject(UserService)

  @ViewChild('modal') modal: ModalComponent

  tipoDoc: any[]
  form: FormGroup
  nombreBtn: string = 'REGISTRAR'
  nombreTitulo: string = 'Registrar Médico'
  dataUsuarios: any
  columnas: Array<SortingTableColumnComponent> = [
    { name: 'id', display: 'ID'},
    { name: 'nombres', display: 'NOMBRES' },
    { name: 'apellidos', display: 'APELLIDOS' },
    { name: 'email', display: 'EMAIL' },
    { name: 'numdoc', display: 'N° DOCUMENTO' },
    { name: 'telefono', display: 'TELÉFONO' },
    { name: 'rol', display: 'ROL' },
    { name: 'editar', display: 'EDITAR', accion: 'editar', icon: 'edit' }
  ]

  constructor() { }

  ngOnInit() {
    this.form = this.FB.group({
      nombres: [null, Validators.required],
      apellido_p: [null, Validators.required],
      apellido_m: [null, Validators.required],
      tipodoc: [null, Validators.required],
      numdoc: [null, Validators.required],
      especialidad_id: [null, Validators.required],
      activo: [true]
    })
    this.loadTabla()
  }

  async loadTabla() {
    this.dataUsuarios = await firstValueFrom(this.US.getUsers())
  }

  registroNuevo(){
    this.form.reset()
    this.modal.showModal()
  }

  accion([a, i, data]){
    if(a.accion == 'editar'){ 
      this.SA.SuccessAlert("Detalle modal")
    }
  }

  OnSubmit(){
    if(this.form.invalid){
      this.SA.InfoAlert("Complete los campos requeridos (*).")
      return
    }else{
      this.US.postUser(this.form.value).pipe(
        tap(() => {
          this.SA.SuccessAlert("¡Usuario creado con éxito!")
          this.modal.hiddenModal()
          this.loadTabla()
        }),
      ).subscribe({
        error: (err) => {
          this.SA.ErrorAlert(`${err}`);
        }
      })
    }
  }
}

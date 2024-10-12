import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { SweetAlertService } from 'src/app/auth/services/sweetAlertService.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FicheroSevice } from 'src/app/auth/services/ficheroSevice.service';
import { firstValueFrom, Observable, take } from 'rxjs';
import { Pais, TipoDoc } from 'src/app/auth/interfaces/ficheros';
import { UserService } from 'src/app/auth/services/userService.service';
import { ValidacionService } from 'src/app/auth/services/validacion.service';
import { ModalComponent } from 'src/app/shared/components/modal-component/modal-component.component';
import { SortingTableColumnComponent } from 'src/app/shared/components/sorting-table/sorting-table-column.interface';
import { CommonModule } from '@angular/common';
import { MatModule } from 'src/app/appModules/mat.module';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatModule, SharedModule]
})

export class RegistrarUsuarioComponent implements OnInit {
  SA = inject(SweetAlertService)
  FB = inject(FormBuilder)
  FS = inject(FicheroSevice)
  US = inject(UserService)
  VA = inject(ValidacionService)

  @ViewChild('modal') modal: ModalComponent

  pais$: Observable<Pais[]>
  paises: any[]
  tipoDoc$: Observable<TipoDoc[]>
  tipoDoc: any[]
  form: FormGroup
  nombreBtn: string = ''
  nombreTitulo: string = ''
  dataUsuarios: any
  VERB_HTTP: string = ''
  id_registro: any

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
    this.pais$ = this.FS.getPais();
    this.pais$.subscribe(data => { this.paises = data })
    this.tipoDoc$ = this.FS.getTipoDoc()
    this.tipoDoc$.subscribe(data => { this.tipoDoc = data })
    this.form = this.FB.group({
      id: [null],
      username: [null, Validators.required],
      nombres: [null, Validators.required],
      apellidos: [null, Validators.required],
      email: [null, Validators.required],
      fecha_nacimiento: [null, Validators.required],
      clave: [null, Validators.required],
      tipodoc: [null, Validators.required],
      numdoc: [null, Validators.required],
      pais_id: [null],
      departamento: [null],
      distrito: [null],
      genero: [null, Validators.required],
      telefono: [null],
      //*fecha_creacion: moment().format(),
      rol: [null, Validators.required],
      activo: [false]
    })
    this.loadTabla()
  }

  async loadTabla() {
    this.dataUsuarios = await firstValueFrom(this.US.getUsers())
  }

  registroNuevo(){
    this.form.reset()
    this.modal.showModal()
    this.nombreTitulo = 'Registrar Usuario'
    this.nombreBtn = 'REGISTRAR'
    this.VERB_HTTP = 'POST'
  }

  accion([a, data, i]){
    console.log(data)
    if(a.accion == 'editar'){
      this.nombreBtn = 'ACTUALIZAR'
      this.nombreTitulo = 'Actualizar Usuario'
      this.VERB_HTTP = 'PUT'
      this.id_registro = data.id
      this.form.patchValue(data)
      this.modal.showModal()
    }
  }

  OnSubmit(){
    if(this.form.valid){
      const data = this.form.getRawValue()
      this.US.crudUser(this.VERB_HTTP, data, this.id_registro).pipe(take(1)).subscribe({
        next: (r) => {
          if(r.status){
            this.SA.ErrorAlert(r.message)
          }else{
            this.SA.SuccessAlert(r.message)
            this.form.reset()
            this.registroNuevo()
            this.modal.hiddenModal()
            this.loadTabla()
          }
        }
      })
    }else{
      this.VA.validacionCampos(this.form.controls, this.SA)
    }
  }
}

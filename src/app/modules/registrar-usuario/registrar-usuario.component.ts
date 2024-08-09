import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatModule } from 'src/app/appModules/mat.module';
import { SharedModule } from "../../shared/shared.module";
import { ModalComponent } from 'src/app/shared/modal-component/modal-component.component';
import { SortingTableColumnComponent } from 'src/app/shared/sorting-table/sorting-table-column.interface';
import { SweetAlertService } from 'src/app/auth/services/sweetAlertService.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FicheroSevice } from 'src/app/auth/services/ficheroSevice.service';
import { Observable, tap } from 'rxjs';
import { Pais, TipoDoc } from 'src/app/auth/interfaces/ficheros';
import * as moment from 'moment';
import { UserService } from 'src/app/auth/services/userService.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatModule, SharedModule]
})

export class RegistrarUsuarioComponent implements OnInit {
  SA = inject(SweetAlertService)
  FB = inject(FormBuilder)
  FS = inject(FicheroSevice)
  US = inject(UserService)

  @ViewChild('modal') modal: ModalComponent

  pais$: Observable<Pais[]>
  paises: any[]
  tipoDoc$: Observable<TipoDoc[]>
  tipoDoc: any[]
  form: FormGroup
  nombreBtn: string = 'REGISTRAR'
  nombreTitulo: string = 'Registrar Usuario'
  dataUsuarios: any[]
  columnas: Array<SortingTableColumnComponent> = [
    { name: 'id', display: 'ID'},
    { name: 'nombres', display: 'NOMBRES' },
    { name: 'apellidos', display: 'APELLIDOS' },
    { name: 'email', display: 'EMAIL' },
    { name: 'numdoc', display: 'N° DOCUMENTO' },
    { name: 'telefono', display: 'TELÉFONO' },
    { name: 'rol', display: 'ROL' },
  ]

  constructor() { }

  ngOnInit() {
    this.US.getUsers().subscribe(data => {
      data = this.dataUsuarios;
    })
    this.pais$ = this.FS.getPais();
    this.pais$.subscribe(data => {
      this.paises = data
    })
    this.tipoDoc$ = this.FS.getTipoDoc()
    this.tipoDoc$.subscribe(data => {
      this.tipoDoc = data
    })
    this.form = this.FB.group({
      username: [null, Validators.required],
      nombres: [null, Validators.required],
      apellidos: [null, Validators.required],
      email: [null, Validators.required],
      birthdate: [null, Validators.required],
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
      activo: [true]
    })
    //this.loadTabla()
  }

  registroNuevo(){
    this.modal.showModal()
  }

  /*loadTabla(){
    this.US.getUsers().subscribe(
      (usuarios) => {
        this.dataUsuarios = usuarios
      }
    )
  }*/

  OnSubmit(){
    if(this.form.invalid){
      this.SA.InfoAlert("Complete los campos correctamente.")
      return
    }else{
      this.US.postUser(this.form.value).pipe(
        tap(() => {
          console.log("Valor del formular ->",this.form.value)
          this.SA.InfoAlert("Usuario creado con éxito.")
          this.modal.hiddenModal()
        }),
      ).subscribe({
        error: (err) => {
          this.SA.ErrorAlert(`${err}`);
        }
      })
    }
  }
}

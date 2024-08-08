import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatModule } from 'src/app/appModules/mat.module';
import { SharedModule } from "../../shared/shared.module";
import { ModalComponent } from 'src/app/shared/modal-component/modal-component.component';
import { SortingTableColumnComponent } from 'src/app/shared/sorting-table/sorting-table-column.interface';
import { SweetAlertService } from 'src/app/auth/services/sweetAlertService.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

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

  @ViewChild('modal') modal: ModalComponent

  form: FormGroup
  nombreBtn: string = 'REGISTRAR'
  dataUsuarios: any
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
    this.form = this.FB.group({

    })
  }

  test(){
    this.modal.showModal()
  }

  OnSubmit(){
    this.SA.SuccessAlert("¡Usuario creado correctamente!")
    this.modal.hiddenModal()
  }
}

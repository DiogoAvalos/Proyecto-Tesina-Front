import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatModule } from 'src/app/appModules/mat.module';
import { FicheroSevice } from 'src/app/auth/services/ficheroSevice.service';
import { SweetAlertService } from 'src/app/auth/services/sweetAlertService.service';
import { ModalComponent } from 'src/app/shared/modal-component/modal-component.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SortingTableColumnComponent } from 'src/app/shared/sorting-table/sorting-table-column.interface';

@Component({
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule, MatModule, SharedModule ],
  templateUrl: './registrar-producto.component.html',
  styleUrl: './registrar-producto.component.scss',
  selector: 'test'
})

export class RegistrarProductoComponent implements OnInit {
  SA = inject(SweetAlertService)
  FB = inject(FormBuilder)
  FS = inject(FicheroSevice)

  @ViewChild('modal') modal: ModalComponent

  form: FormGroup
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
    })
  }

  OnSubmit(){
  }
}

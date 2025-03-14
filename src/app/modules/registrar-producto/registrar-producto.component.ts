import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatModule } from 'src/app/appModules/mat.module';
import { FicheroSevice } from 'src/app/auth/services/ficheroSevice.service';
import { SweetAlertService } from 'src/app/auth/services/sweetAlertService.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { SortingTableColumnComponent } from 'src/app/shared/sorting-table/sorting-table-column.interface';

@Component({
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule, MatModule, SharedModule ],
  templateUrl: './registrar-producto.component.html',
  styleUrls: ['./registrar-producto.component.css']
})
export class RegistrarProductoComponent implements OnInit {
  SA = inject(SweetAlertService)
  FB = inject(FormBuilder)
  FS = inject(FicheroSevice)

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
  }

  OnSubmit(){
  }
}

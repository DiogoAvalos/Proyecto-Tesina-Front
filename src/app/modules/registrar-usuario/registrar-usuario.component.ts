import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatModule } from 'src/app/appModules/mat.module';
import { SharedModule } from "../../shared/shared.module";
import { ModalComponent } from 'src/app/shared/modal-component/modal-component.component';
import { SortingTableColumnComponent } from 'src/app/shared/sorting-table/sorting-table-column.interface';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css'],
  standalone: true,
  imports: [CommonModule, MatModule, SharedModule]
})

export class RegistrarUsuarioComponent implements OnInit {

  @ViewChild('modal') modal: ModalComponent

  data: any
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
  }

  test(){
  }
}

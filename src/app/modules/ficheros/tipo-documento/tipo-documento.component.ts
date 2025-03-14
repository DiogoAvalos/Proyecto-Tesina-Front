import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { FicheroSevice } from 'src/app/auth/services/ficheroSevice.service';
import { ModalComponent } from 'src/app/shared/modal-component/modal-component.component';
import { SortingTableColumnComponent } from 'src/app/shared/sorting-table/sorting-table-column.interface';
import { formTipoDoc } from '../ficheros-forms';

@Component({
  selector: 'app-tipo-documento',
  templateUrl: './tipo-documento.component.html',
  styleUrls: ['./tipo-documento.component.css']
})
export class TipoDocumentoComponent implements OnInit {
  @ViewChild('modal') modal: ModalComponent

  FS = inject(FicheroSevice)

  nombreBtn: string = 'Registrar'
  dataTipoDoc: any
  formTipoDoc: FormGroup = formTipoDoc()

  columnas: Array<SortingTableColumnComponent> = [
      { name: 'id', display: 'ID'},
      { name: 'cod_corto', display: 'NOMBRE CORTO' },
      { name: 'descripcion', display: 'DESCRIPCION' },
      { name: 'estado', display: 'ESTADO' },
      { name: 'editar', display: 'EDITAR', accion: 'editar', icon: 'edit' }
    ]

  constructor() { }

  ngOnInit() {
    this.loadTabla()
  }

  loadTabla = async() => this.dataTipoDoc = await firstValueFrom(this.FS.getTipoDoc())


  accion([a, data, i]){
    if(a.accion == 'editar'){
      this.formTipoDoc.patchValue(data)
      this.nombreBtn = 'Actualizar'
      this.modal.showModal()
    }
  }

  OnSubmit(){

  }
}

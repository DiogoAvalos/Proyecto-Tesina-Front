import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'src/app/shared/modal-component/modal-component.component';
import { SortingTableColumnComponent } from 'src/app/shared/sorting-table/sorting-table-column.interface';

@Component({
  selector: 'app-registro-venta',
  templateUrl: './registro-venta.component.html',
  styleUrls: ['./registro-venta.component.css']
})
export class RegistroVentaComponent implements OnInit {
  @ViewChild('modal') modal: ModalComponent

  columnas: Array<SortingTableColumnComponent> = [
    { name: 'id', display: 'ID'},
    { name: 'comprobante', display: 'N° COMPROBANTE' },
    { name: 'cliente', display: 'NOMBRE DEL CLIENTE' },
    { name: 'productos', display: 'CANTIDAD DE PRODUCTOS' },
    { name: 'venta', display: 'VENTA TOTAL' },
    { name: 'estado', display: 'ESTADO' },
    { name: 'editar', display: 'EDITAR', accion: 'editar', icon: 'edit' }
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  registroNuevo = () => this.router.navigate(['modules/registros/formulario-venta'])
}

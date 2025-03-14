import { Component, OnInit } from '@angular/core';
import { SortingTableColumnComponent } from 'src/app/shared/sorting-table/sorting-table-column.interface';

@Component({
  selector: 'app-formulario-venta',
  templateUrl: './formulario-venta.component.html',
  styleUrls: ['./formulario-venta.component.css']
})
export class FormularioVentaComponent implements OnInit {

  columnas: Array<SortingTableColumnComponent> = [
    { name: 'id', display: 'CODIGO DE PRODUCTO'},
    { name: 'comprobante', display: 'NOMBRE DE PRODUCTO' },
    { name: 'cliente', display: 'CANTIDAD' },
    { name: 'productos', display: 'PRECIO UNITARIO' },
    { name: 'editar', display: 'EDITAR', accion: 'editar', icon: 'edit' }
  ]

  constructor() { }

  ngOnInit() {
  }

}

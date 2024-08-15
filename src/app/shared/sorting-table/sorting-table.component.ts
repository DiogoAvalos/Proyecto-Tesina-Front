import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table'
import { CommonModule } from '@angular/common';
import { MatModule } from 'src/app/appModules/mat.module';
import { SortingTableColumnComponent } from './sorting-table-column.interface';


export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

@Component({
  selector: 'tabla-dinamica',
  templateUrl: './sorting-table.component.html',
  styleUrl: './sorting-table.component.scss'
})

export class SortingTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator
  @ViewChild(MatSort) sort: MatSort
  @Input() columnas: Array<SortingTableColumnComponent>
  @Input() data: Array<any>
  @Input() paginate: number = 0
  @Input() estiloactivo: any = null
  @Input() estiloinactivo: any = null
  @Output() accion = new EventEmitter<[string, number, any]>()
  displayedColumns: string[]
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>()

  constructor() {}

  ngOnInit() {
    this.displayedColumns = this.columnas.map(col => col.name)
    this.dataSource.data = this.data
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.dataSource.data = changes['data'].currentValue || [];
    }
    if (changes['columnas']) {
      this.displayedColumns = this.columnas.map(col => col.name);
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }

  Accion(accion: any, item: any, event: any) {
    if(accion){
      if(accion.name === 'checkbox'){
        item['checkbox'] = event.target.checked
      }
      this.accion.emit([accion, item, event])
    }
  }
}

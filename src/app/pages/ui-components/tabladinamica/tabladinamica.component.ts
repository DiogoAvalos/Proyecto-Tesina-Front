import { ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from "@angular/core";
import { TablaDinamicaColumnas, TablaDinamicaEstiloDinamico } from "./tabladinamica.interfases";

@Component({
  standalone: true,
  imports: [CommonModule, SharedModule, NgxPaginationModule, SiNoPipe],
  selector: 'app-tabladinamica',
  templateUrl: './tabladinamica.component.html',
  styleUrls: ['./tabladinamica.component.css'],
})

/* 
columnas: {
  name: igual que en data
  display: Nombre a mostrar en cabecera
  pipe: cualquier pipe ejemplo: new DatePipe("en-US")
  par1: parámetro 1 del pipe, ejemplo "yyyy-MM-dd"
  par2: parámetro 2 del pipe
  style: ejemplo "text-align: left;"
  seleccion: booleano: muestra columna con checkbox
  accion: accion que se emite al hacer click
  eliminar: booleano, botón eliminar valor: enabled o disabled
  vertical: booleano, agrega clases para cambiar a modo vertical en movil
}
paginate: > 0 muestra paginación con el numero asignado por página
*/

export class TabladinamicaComponent {
  @ViewChild('scrollframe') scrollFrame: ElementRef;
  @ViewChild('tabla') tabla: ElementRef;
  @Input() id: string;
  @Input() columnas:Array<TablaDinamicaColumnas>;
  @Input() data:Array<any>;
  @Input() pie:Object = {};
  @Input() paginate:number = 0;
  @Input() vertical:number = 0;
  @Input() tablestyle:string = '';
  @Input() divstyle:string = 'width: 100%; overflow: auto; border-radius: 1rem';
  @Input() filtrar: boolean = false
  @Input() estiloactivo: TablaDinamicaEstiloDinamico = null
  @Input() estiloinactivo: TablaDinamicaEstiloDinamico = null
  @Output() accion = new EventEmitter<[string,number,any]>();
  pagina: number = 1;
  innerWidth = window.innerWidth;
  filtro: string
  @HostListener('window:resize', ['$event'])

  onResize() {
    this.innerWidth = window.innerWidth;
  }


  Accion(accion:any, item: any, event: any) {
    const index = this.data.findIndex(d => d == item)
    if(accion){
      if (accion?.name == 'checkbox') {
        this.data[index]['checkbox'] = event.target.checked;
      }
      this.accion.emit([accion, index, event]);
    }
  }

  Object(item,columnname){
    return String(columnname).split('.').reduce((prev, curr) => {
      return prev ? prev[curr] : null
    }, item)
  }

  set filterData(texto: string) {
    this.filtro = texto;
  }

  get filterData() {
    return this.filtro;
  }

  filtrarData(value: string) {
    this.pagina = 1
    this.filterData = value.trim();
  }

  estiloInactivo(item){
    switch (this.estiloinactivo.operador) {
      case ">":
        return item[this.estiloinactivo.columna1] > item[this.estiloinactivo.columna2]
      case "<":
        return item[this.estiloinactivo.columna1] < item[this.estiloinactivo.columna2]
      case "=":
        return item[this.estiloinactivo.columna1] == item[this.estiloinactivo.columna2]
      case "literal":
        return item[this.estiloinactivo.columna1] == this.estiloinactivo.columna2
      case "!literal":
        return item[this.estiloinactivo.columna1] != this.estiloinactivo.columna2
    }
  }

  estiloActivo(item){
    switch (this.estiloactivo.operador) {
      case ">":
        return item[this.estiloactivo.columna1] > item[this.estiloactivo.columna2]
      case "<":
        return item[this.estiloactivo.columna1] < item[this.estiloactivo.columna2]
      case "=":
        return item[this.estiloactivo.columna1] == item[this.estiloactivo.columna2]
      case "literal":
        return item[this.estiloactivo.columna1] === this.estiloactivo.columna2
      case "!literal":
        return item[this.estiloactivo.columna1] != this.estiloactivo.columna2
    }
  }

}

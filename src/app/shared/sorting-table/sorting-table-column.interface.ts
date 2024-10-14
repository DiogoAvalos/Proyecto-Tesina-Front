export interface SortingTableColumnComponent {
  name: string //* Nombre del atributo que se trae a la tabla dinamica
  display?: string //* Nombre de la cabecera
  default?: string
  title?: string //* 
  style?: string //* Estilos CSS
  icon?: string //* Icono a mostrar en alguna columna
  class?: string //* Clase CSS
  headerstyle?: string
  accion?: string //* Acción al dar clic
}

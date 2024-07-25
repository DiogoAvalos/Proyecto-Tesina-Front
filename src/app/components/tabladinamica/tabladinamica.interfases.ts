export interface TablaDinamicaColumnas{
    name:string  //* igual que en data
    display?:string  //* Nombre a mostrar en cabecera
    default?:string //* Nombre por defecto si no hay data
    title?:string 
    pipe?:any  //* cualquier pipe ejemplo: new DatePipe("en-US")
    par1?:string  //* parámetro 1 del pipe, ejemplo "yyyy-MM-dd"
    par2?:string  //* parámetro 2 del pipe
    style?:string //* Acá puedes agregar estilos para la tabla
    imagen?:string //* Ingresas la ruta de la imagen
    class?:string 
    headerstyle?:string 
    seleccion?:boolean  //* muestra columna con checkbox
    accion?:string  //* accion que se emite al hacer click
    eliminar?:boolean //* botón eliminar valor: enabled o disabled
};

export interface TablaDinamicaEstiloDinamico{
    columna1:string 
    operador:">"|"<"|"="|"literal"|"!literal"
    columna2:string
};
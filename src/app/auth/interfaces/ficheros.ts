export interface Pais {
    id: number
    nombre: string
}

export interface TipoDoc {
    id: number
    descripcion: string
}

export interface UnidadVenta {
    id: number
    descripcion: string
    creador: string
    creacion: Date
}

export interface Familia {
    id: number
    codigo_familia: string
    descripcion: string
    estado: boolean
    creador: string
    creacion: Date
}

export interface SubFamilia {
    id: number
    familia_id: number
    codigo_subfamilia: string
    descripcion: string
    creador: string
    creacion: Date
}

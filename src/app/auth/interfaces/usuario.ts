import { FormControl } from "@angular/forms";

export interface Usuario {
    id: FormControl<number>
    username: FormControl<string>
    nombres: FormControl<string>
    apellidos: FormControl<string>
    email: FormControl<string>
    birthdate: FormControl<string>
    clave: FormControl<string>
    tipodoc: FormControl<number>
    numdoc: FormControl<string>
    pais_id?: FormControl<string>
    departamento_id?: FormControl<string>
    distrito_id?: FormControl<string>
    genero: FormControl<string>
    telefono?: FormControl<string>
    rol?: FormControl<string>
    activo?: FormControl<boolean>
    imagen_base64?: FormControl<string>
}

export interface UsuarioCabecera {
    id: number
    username: string
    nombres: string
    apellidos: string
    email: string
    birthdate: string
    clave: string
    tipodoc: number
    numdoc: string
    pais_id?: string
    departamento_id?: string
    distrito_id?: string
    genero: string
    telefono?: string
    rol?: string
    activo?: boolean
    imagen_base64?: string
}
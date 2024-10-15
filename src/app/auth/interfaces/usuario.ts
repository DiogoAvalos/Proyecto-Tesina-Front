import { FormControl } from "@angular/forms";

export interface Usuario {
    id: FormControl<number>
    username: FormControl<string>
    nombres: FormControl<string>
    apellidos: FormControl<string>
    email: FormControl<string>
    fecha_nacimiento: FormControl<string>
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
    fecha_nacimiento: string
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

export interface Token {
    access_token: string
    token_type: string
    user: UserToken
}

export interface UserToken {
    username: string
    nombres: string
    apellidos: string
    correo: string
    imagen_base64: string | null;
}

export interface MenuItem {
    id: number
    label: string
    icon: string
    router_link: string
}

export interface Roles {
    id: number
    nombre_rol: string
    accesos: MenuItem[]
}

export interface Accesos {
    name: string
    completed: boolean
    subtasks?: Accesos[]
}
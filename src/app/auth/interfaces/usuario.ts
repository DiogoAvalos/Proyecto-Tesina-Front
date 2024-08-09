export interface Usuario {
    id: number;
    username: string;
    nombres: string;
    apellidos: string;
    email: string;
    birthdate: string;
    clave: string;
    tipodoc: number;
    numdoc: string;
    pais_id: string | null;
    departamento_id: string | null;
    distrito_id: string | null;
    genero: string;
    telefono: string | null;
    rol: string | null;
    activo: boolean | null;
    imagen_base64: string | null;
}
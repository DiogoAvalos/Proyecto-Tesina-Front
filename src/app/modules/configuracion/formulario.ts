import { FormControl, FormGroup, Validators } from "@angular/forms"

export const formUsuario = () => {
    return new FormGroup({
        id: new FormControl(null),
        username: new FormControl(null, Validators.required),
        nombres: new FormControl(null, Validators.required),
        apellidos: new FormControl(null, Validators.required),
        email: new FormControl(null, Validators.required),
        fecha_nacimiento: new FormControl(null, Validators.required),
        clave: new FormControl(null, Validators.required),
        tipodoc: new FormControl(null, Validators.required),
        numdoc: new FormControl(null, Validators.required),
        pais_id: new FormControl(null, Validators.required),
        departamento: new FormControl(null),
        distrito: new FormControl(null),
        genero: new FormControl(null, Validators.required),
        telefono: new FormControl(null),
        //*fecha_creacion: new FormControl(null),
        activo: new FormControl(null),
    })
}

export const formRol = () => {
    return new FormGroup({
        id: new FormControl(null),
        nombre_rol: new FormControl(null),
        accesos: new FormControl([])
    })
}

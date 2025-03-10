import { FormControl, FormGroup, Validators } from "@angular/forms"

export const formTipoDoc = () => {
    return new FormGroup({
        id: new FormControl(null),
        cod_sunat: new FormControl(null),
        cod_corto: new FormControl(null),
        descripcion: new FormControl(null, Validators.required),
        activo: new FormControl(null),
    })
}
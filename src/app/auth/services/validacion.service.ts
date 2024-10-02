import { Injectable } from '@angular/core';
import { SweetAlertService } from './sweetAlertService.service';

@Injectable({
  providedIn: 'root'
})
export class ValidacionService {

constructor() { }

  validacionCampos(form: any, SA: SweetAlertService){
    for(let ele in form){
      const control = form[ele]
      if(control && control.errors){
        const msg = document.querySelector(`mat-label[data-for="${ele}"]`) || document.querySelector(`mat-label[data-for="${ele}"] + label`)
        if(msg){
          SA.InfoAlert('Falta registrar ' + msg.textContent)
        }
      }
    }
  }
}

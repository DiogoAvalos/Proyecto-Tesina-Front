import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class SweetAlertService {

constructor() { }

  SuccessAlert(mensaje: string){
    Swal.fire({
      icon: 'success',
      text: `${mensaje}`,
      showConfirmButton: true
    })
  }

  InfoAlert(message: string) {
    Swal.fire({
      icon: 'info',
      html: `${message}`,
      showConfirmButton: true,
    });
  }


  ErrorAlert(message: string){
    Swal.fire({
      icon: 'error',
      html: `${message}`,
      showConfirmButton: true,
    });
  }
}

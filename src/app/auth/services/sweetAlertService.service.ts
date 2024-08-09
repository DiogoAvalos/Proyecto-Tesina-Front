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


  ConfirmAlert(
    title, 
    icon:any = 'question',
    text:string = '',
    confirmButtonText:string = 'Si', 
    cancelButton:boolean = true, 
    cancelButtonText:string = 'No'
  ):Promise<any> {
    return Swal.fire({
      title,
      text: text,
      icon: icon ?? 'question',
      confirmButtonColor: '#3085d6',
      confirmButtonText: confirmButtonText,
      showCancelButton: cancelButton,
      cancelButtonColor: '#d33',
      cancelButtonText: cancelButtonText,
    })
  }
}

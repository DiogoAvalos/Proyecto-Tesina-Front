import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class SweetAlertService {

constructor() { }

  SuccessAlert(mensaje: string){
    Swal.fire({
      title: '¡Éxito!',
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

  HandleError(title?: string, message?: string){
    Swal.fire({
      title: `${title}`,
      icon: 'error',
      html: `${message}`,
      showConfirmButton: true,
    });
  }

  async ObservacionAlert(){
    const { value: text } = await Swal.fire({
      input: "textarea",
      inputLabel: "Message",
      inputPlaceholder: "Type your message here...",
      inputAttributes: {
        "aria-label": "Type your message here"
      },
      showCancelButton: true
    });
    if (text) {
      Swal.fire(text);
    }
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

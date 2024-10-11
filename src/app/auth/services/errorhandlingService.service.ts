import { inject, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { SweetAlertService } from './sweetAlertService.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {

  SA = inject(SweetAlertService)

  constructor() { }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Error Front ->', {
        message: error.error.message,
        filename: error.error.filename,
        lineno: error.error.lineno,
        colno: error.error.colno
      });
      //*this.SA.ErrorAlert(`Error de Front-End: ${error.error.message}`);
    }
    else {
      console.error('Error Back ->', {
        status: error.status,
        statusText: error.statusText,
        url: error.url,
        message: error.message,
        error: error.error
      });
      switch (error.status) {
        case 400:
          this.SA.HandleError('400 - Solicitud incorrecta', `${error.error.detail}`);
          break;
        case 401:
          this.SA.HandleError('401 - No autorizado', `${error.error.detail}`);
          break;
        case 405:
          this.SA.HandleError('405 - No se encontró el recurso', `${error.error.detail}`)
          break;
        case 422:
          this.SA.HandleError('422 - Propiedad no procesable', `${error.error.detail}`)
          break
        case 404:
          this.SA.HandleError('404 - No encontrado', `${error.error.detail}`);
          break;
        case 500:
          this.SA.HandleError('500 - Error interno del servidor', `${error.error.detail}`);
          break;
        default:
          this.SA.HandleError(`${error.status}`, `${error.message}`);
          break;
      }
    }
  }
}

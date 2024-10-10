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
      this.SA.ErrorAlert(error.error.message)
    } else {
      this.SA.HandleError(`${error.status}`, `${error.message}`)
    }
    this.SA.ErrorAlert(`${error.message}`)
  }
}

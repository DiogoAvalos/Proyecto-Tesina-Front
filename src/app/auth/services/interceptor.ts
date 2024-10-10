import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandlingService } from './errorhandlingService.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private errorHandlingService: ErrorHandlingService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        this.errorHandlingService.handleError(error)
        return throwError(error)
      })
    );
  }
}

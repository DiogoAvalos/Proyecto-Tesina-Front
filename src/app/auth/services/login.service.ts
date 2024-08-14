import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Token } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

constructor(private http: HttpClient) { }

  Login(data: any): Observable<Token> {
    return this.http.post<Token>(`${environment.apiUrl}/usuarios/login`, data)
  }
}

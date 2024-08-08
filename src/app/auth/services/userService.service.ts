import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserServiceService {

constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${environment.apiUrl}/seguridad/usuarios`)
  }

  crearUsuario(data: any){
    return this.http.post(`${environment.apiUrl}/seguridad/usuarios`, data)
  }
}

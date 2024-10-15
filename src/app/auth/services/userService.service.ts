import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Roles, Usuario } from '../interfaces/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

constructor(private http: HttpClient) {}

  getUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${environment.apiUrl}/usuarios/usuarios/`)
  }

  crudUser(VERB_HTTP: string, data: any, id?: number): Observable<any>{
    const API = {
      PUT: this.http.put(`${environment.apiUrl}/usuarios/${id}`, data),
      POST: this.http.post(`${environment.apiUrl}/usuarios/usuarios/`, data)
    }
    return API[VERB_HTTP]
  }

  putUserImagen(id: number, base64Image: string){
    return this.http.put(`${environment.apiUrl}/usuarios/imagen/${id}`, base64Image)
  }

  //* Roles y Menú Items *//
  getRoles(): Observable<Roles[]>{
    return this.http.get<Roles[]>(`${environment.apiUrl}/usuarios/listar-roles`)
  }
}

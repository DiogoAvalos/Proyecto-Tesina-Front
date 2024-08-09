import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pais, TipoDoc } from '../interfaces/ficheros';

@Injectable({
  providedIn: 'root'
})

export class FicheroSevice {

constructor(private http: HttpClient) {}

  getPais(): Observable<Pais[]>{
    return this.http.get<Pais[]>(`${environment.apiUrl}/ficheros/paises/`)
  }

  getTipoDoc(): Observable<TipoDoc[]>{
    return this.http.get<TipoDoc[]>(`${environment.apiUrl}/ficheros/tipodoc/`)
  }
}

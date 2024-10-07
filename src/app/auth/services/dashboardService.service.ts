import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productos } from '../interfaces/productos';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

constructor(private http: HttpClient) { }

  dataVentaProducto(fecha_inicio: any, fecha_fin: any): Observable<Productos[]>{
    return this.http.get<Productos[]>(`${environment.apiUrl}/productos/producto/ventapormes?fecha_inicio=${fecha_inicio}&fecha_fin=${fecha_fin}`)
  }
}

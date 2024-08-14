import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

constructor() { }

  //* Guardar valor en el localStorage
  setItem(key: string, value: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('Error al guardar en localStorage', e);
    }
  }

  //* Obtener valor del localStorage
  getItem<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (e) {
      console.error('Error al obtener de localStorage', e);
      return null;
    }
  }

  //* Eliminar valor de localStorage
  removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error('Error al eliminar de localStorage', e);
    }
  }

  //* Elimina/limpia el localStorage
  clear(): void {
    try {
      localStorage.clear();
    } catch (e) {
      console.error('Error al limpiar localStorage', e);
    }
  }
}

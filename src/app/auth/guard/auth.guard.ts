import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token')
    return !!token
  }
}

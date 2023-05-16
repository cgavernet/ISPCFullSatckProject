import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  //Iniciar Sesión
  login(email: string, password: string): boolean {
    if (email === 'admin@analizar.tk' && password === '123456789') {
      localStorage.setItem('currentUser', JSON.stringify({ email: email }));
      return true;
    } else {
      return false;
    }
  }
  //Cerrar sesión 
  logout(): void {
    localStorage.removeItem('currentUser');
  }
  //Verificación de autenticación
  isLoggedIn(): boolean {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    return currentUser && currentUser.email !== undefined;
  }
}

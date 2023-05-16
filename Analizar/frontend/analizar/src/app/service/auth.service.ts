import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  apiUrl = 'http://localhost:3000/usuarios';

  //Iniciar Sesión
  login(email: string, password: string): Observable<any> {
    return this.http.get(this.apiUrl);
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

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private is_admin: boolean = false;

  constructor(private http: HttpClient) { }
  apiUrl = 'http://localhost:8000';

  //Iniciar Sesión
  login(email: string, password: string): Observable<any> {
    const body = {
      email: email,
      password: password
    };

    return this.http.post(`${this.apiUrl}/users/loginUser`, body);
  }
  //Cerrar sesión 
  logout(): void {
    this.is_admin = false;
    localStorage.removeItem('currentUser');
  }
  //Verificación de autenticación
  isLoggedIn(): boolean {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    return currentUser && currentUser.email !== undefined;
  }
  setIsAdmin(is_admin: boolean) {
    this.is_admin = is_admin;
  }

  getIsAdmin() {
    return this.is_admin;
  }
}

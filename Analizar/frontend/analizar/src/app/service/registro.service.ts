import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: HttpClient) { }
  apiUrl = 'http://localhost:8000/users'

  addUsers(nombre: string, apellido: string, email: string, celular: number, password: string): Observable<any> {
    const user = { nombre, apellido, email, celular, password }
    return this.http.post(`${this.apiUrl}/addUser`, user);
  }
  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getUsersAndMedidores`);
  }
  removeUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleteUser/${id}`);
  }
}

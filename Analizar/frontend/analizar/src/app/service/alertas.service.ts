import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(private http: HttpClient) { }
  apiUrl = 'http://localhost:3000/alertas'

  getAlertas(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  addAlertas(valor: number, typeAlert: number, fechaAlta: string): Observable<any> {
    const alert = { valor, typeAlert, fechaAlta}
    return this.http.post(this.apiUrl, alert)
  }
  removeAlertas(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  updateAlertas(id: number, valor: number, typeAlert: number, fechaAlta: string): Observable<any>{
    const alert = { valor, typeAlert, fechaAlta}
    return this.http.put(`${this.apiUrl}/${id}`, alert);
  }
}

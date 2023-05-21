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
  addAlertas(valor: number, medidor: number, fechaAlta: string): Observable<any> {
    const alert = { valor, medidor, fechaAlta}
    return this.http.post(this.apiUrl, alert)
  }
  removeAlertas(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  getAlertaById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  updateAlertas(id: number, valor: number, medidor: number, fechaAlta: string): Observable<any>{
    const alert = { valor, medidor, fechaAlta}
    return this.http.put(`${this.apiUrl}/${id}`, alert);
  }
}

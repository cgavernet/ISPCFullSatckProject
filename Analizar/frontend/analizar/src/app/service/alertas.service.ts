import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(private http: HttpClient) { }
  apiUrl = 'http://localhost:3000/alertas'
  apiUrlAdd = 'http://localhost:8000/alertas/addAlerta'
  apiUrlGet = 'http://localhost:8000/alertas/'
  apiUrlDel = 'http://localhost:8000/alertas/deleteAlerta'

  getAlertas(): Observable<any> {
    return this.http.get(this.apiUrlGet);
  }
  addAlertas(valor: number, medidor: number, fechaAlta: string): Observable<any> {
    const alert = { valor, medidor, fechaAlta}
    return this.http.post(this.apiUrlAdd, alert)
  }
  removeAlertas(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrlDel}/${id}`);
  }
  getAlertaById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  updateAlertas(id: number, valor: number, medidor: number, fechaAlta: string): Observable<any>{
    const alert = { valor, medidor, fechaAlta}
    return this.http.put(`${this.apiUrl}/${id}`, alert);
  }
}

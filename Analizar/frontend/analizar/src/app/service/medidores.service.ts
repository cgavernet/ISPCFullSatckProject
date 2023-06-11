import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedidoresService {
  constructor(private http: HttpClient) { }
  apiUrl = 'http://localhost:8000/medidores/'
  apiUrlAdd = 'http://localhost:8000/medidores/addMedidores'
  apiUrlGet = 'http://localhost:8000/medidores/'
  apiUrlDel = 'http://localhost:8000/medidores/deleteMedidor'
  apiUrlEdit = 'http://localhost:8000/alertas/editAlerta'

  getAlertas(): Observable<any> {
    //return this.http.get(this.apiUrlGet);
    let userId = localStorage.getItem('userId')
    //console.log(userId);       
    const url = `${this.apiUrl}medidorbyuser/${userId}`;
    return this.http.get(url);
  }
  addAlertas(nombre: string, detalle: string, identificador: string, user: number): Observable<any> {
    const medidor = { nombre, detalle, identificador, user}
    return this.http.post(this.apiUrlAdd, medidor)
  }
  removeAlertas(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrlDel}/${id}`);
  }
  getAlertaById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/getAlertaById/${id}`);
  }
  updateAlertas(id: number, valor: number, medidor: number, fechaAlta: string): Observable<any>{
    const alert = { valor, medidor, fechaAlta}
    return this.http.put(`${this.apiUrlEdit}/${id}`, alert);
  }
}


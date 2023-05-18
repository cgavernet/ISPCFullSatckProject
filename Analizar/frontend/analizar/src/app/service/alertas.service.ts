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
  addAlertas(setAlert: number, typeAlert: string): Observable<any> {
    const alert = { setAlert, typeAlert}
    return this.http.post(this.apiUrl, alert)
  }
}

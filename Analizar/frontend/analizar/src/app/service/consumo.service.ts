import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumoService {

  private apiServerUrl = "http://127.0.0.1:8000/consumos/"

  constructor( private http: HttpClient) { }

  getConsumos():Observable<any>{
    return this.http.get(this.apiServerUrl);
  }
}

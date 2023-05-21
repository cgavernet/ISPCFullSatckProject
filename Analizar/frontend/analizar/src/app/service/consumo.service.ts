import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumoService {

  private apiServerUrl = "http://localhost:3000/consumos"

  constructor( private http: HttpClient) { }

  getConsumos():Observable<any>{
    return this.http.get(this.apiServerUrl);
  }
}

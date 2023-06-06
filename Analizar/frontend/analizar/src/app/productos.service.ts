import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  constructor(private http: HttpClient) { }
  apiUrl = 'http://localhost:3000/productos';

  getProductos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  /* C -> Create/Añadir un producto */
  addProducto(nombre:string, descripcion: string, precio: number, cantidad: number):Observable<any> {
    const producto = {nombre, descripcion, precio, cantidad}
    return this.http.post(this.apiUrl, producto)
  }
  /* R -> Read/Leer un producto a partir de su Id */
  getProductoById(id: number): Observable<any>{
    return this.http.get('${this.apiUrl}/${id}');
  }
  /* U -> Update/Actualizar un producto a partir de su Id */
  updateProductoById(id: number, nombre: string, descripcion: string, precio: number, cantidad: number):Observable<any> {
    const producto = {nombre, descripcion, precio, cantidad}
    return this.http.put('${this.apiUrl}/${id}', producto);
  }
  /* D -> Delete/Eliminar un producto a partir de su ID */
  removeProducto(id: number): Observable<any> {
    return this.http.delete('${this.apiUrl}/{id}');
  }
}

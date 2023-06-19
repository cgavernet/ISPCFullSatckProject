import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  constructor(private http: HttpClient) { }
  apiUrl = 'http://localhost:8000/ecommerce/';

  /* Traer categorias */
  getCategorias(): Observable<any> {
    return this.http.get(`${this.apiUrl}getCategorias`);
  }
  /* Traer Servicios */
  getServicios(): Observable<any> {
    return this.http.get(`${this.apiUrl}getServicios`);
  }
  getProductosAndMedidores(): Observable<any> {
    return this.http.get(`${this.apiUrl}getProductosAndMedidores`);
  }
  // getProductos(): Observable<any> {
  //   return this.http.get(this.apiUrl);
  // }
  /* C -> Create/Añadir un producto */
  addProducto(nombre:string, descripcion: string, rutaImagen: string, precio: number, cantidadDisponible: string, categoria: string):Observable<any> {
    const producto = {nombre, descripcion, rutaImagen, precio, cantidadDisponible, categoria}
    return this.http.post(`${this.apiUrl}add`, producto)
  }
  /* R -> Read/Leer un producto a partir de su Id */
  getProductoById(id: number): Observable<any>{
    return this.http.get(`${this.apiUrl}producto/${id}`);
  }
  /* U -> Update/Actualizar un producto a partir de su Id */
  updateProductoById(id: number, producto:any):Observable<any> {
    return this.http.put(`${this.apiUrl}editar/producto/${id}`, producto);
  }
  /* D -> Delete/Eliminar un producto a partir de su ID */
  removeProducto(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}eliminar/producto/${id}`);
  }
}

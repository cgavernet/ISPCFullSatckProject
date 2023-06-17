import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/productos.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {
  servicios: any[] = [];
  loginError: string = '';
  constructor (private productosService: ProductosService, private authService: AuthService ) {}

  ngOnInit(): void {
    this.getServicios()
  }
  getServicios(){
    this.productosService.getServicios().subscribe((servicios) => {
      //console.log(servicios);
      this.servicios = servicios;
    }, (error: any) => {
      console.error('Hubo un error al obtener los servicios', error);      
    })
  }
  isAdmin(): boolean {  
    return this.authService.getIsAdmin();
  }
  removeProducto(id: number){
    this.productosService.removeProducto(id).subscribe((product: any) => {
      console.log('Producto eliminado con exito:', product);
      this.getServicios()
    }, (error: any) => {
      console.error('Hubo un error al eliminar el producto', error);      
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/productos.service';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit {
  productos: any[]=[];
  counter = Array;
  opcionSeleccionado: string = '1';
  verSeleccion: number = 1;
  
  constructor(private productosService: ProductosService, private authService: AuthService) {
       
  }

  ngOnInit(): void {
    this.productosService.getProductos().subscribe(
      (productos: any[]) => {
        this.productos = productos;
      },
      (error) => {
        console.error('Error al obtener los productos: ', error);
      }
    );
  }

  crearProducto() {
    // Lógica para crear un producto
  }

  editarProductoById(id: number) {
    // Lógica para editar un producto por su ID
  }

  eliminarProducto(id: number) {
    // Lógica para eliminar un producto por su ID
  }
  
  isAdmin(): boolean {
    // console.log(this.authService.isLoggedIn);   
    return this.authService.getIsAdmin();
  }

  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = Number(this.opcionSeleccionado);
  }

  agregarCarrito(producto:any, cantidad:number, tipoProducto:string){
    if(localStorage.getItem('mi-carrito') != null){
      let carritoActual = JSON.parse(localStorage.getItem('mi-carrito')!)
      carritoActual!.push({producto,cantidad, tipoProducto})
      localStorage.setItem('mi-carrito',JSON.stringify(carritoActual))
    }else{
      let carritoActual = JSON.stringify([{producto,cantidad, tipoProducto}])
      localStorage.setItem('mi-carrito',carritoActual)
    }
    Swal.fire({
      icon: 'success',
      title: 'Éxito!',
      text: 'Se agregó el producto al carrito!'
    })
  }
}


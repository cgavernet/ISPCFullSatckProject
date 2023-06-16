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
    this.getProductos()
  }

  isAdmin(): boolean {
    // console.log(this.authService.isLoggedIn);   
    return this.authService.getIsAdmin();
  }

  getProductos(){
    this.productosService.getProductos().subscribe(
      (productos: any[]) => {
        this.productos = productos;
      },
      (error) => {
        console.error('Error al obtener los productos: ', error);
      }
    );
  }

  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = Number(this.opcionSeleccionado);
  }
  
  agregarCarrito(producto:any, cantidad:number, tipoProducto:string){

    console.log(cantidad)
    if(cantidad === 0){
      Swal.fire({
        icon: 'error',
        title: 'Sin stock!',
        text: 'No quedan unidades disponibles de este producto!'
      })
    }

    if(localStorage.getItem('mi-carrito') != null){
      let carritoActual = JSON.parse(localStorage.getItem('mi-carrito')!)
      let seAgregoElemento = false

      for(let item of carritoActual){
        // console.log(item)
        if(item.producto.id === producto.id){
          item.cantidad += cantidad
          seAgregoElemento = true
        }
      }

      if(!seAgregoElemento){
        // let nuevaCantidadFinal = producto.cantidadDisponible - cantidad
        // const prod = {
        //   "nombre": producto.nombre, 
        //   "descripcion":producto.descripcion, 
        //   "rutaImagen": producto.rutaImagen, 
        //   "precio": producto.precio, 
        //   "cantidadDisponible": nuevaCantidadFinal
        // }
        // this.productosService.updateProductoById(producto.id, prod).subscribe((data:any) => {
        //   console.log(data)  
        //   return data
        // },(error:any) => {
        //   console.error(error)
        // })
        carritoActual!.push({producto,cantidad, tipoProducto})
      }
      
      localStorage.setItem('mi-carrito',JSON.stringify(carritoActual))
    }else{
      let carritoActual = JSON.stringify([{producto,cantidad, tipoProducto}])
      // let nuevaCantidadFinal = producto.cantidadDisponible - cantidad
      // const prod = {
      //   "nombre": producto.nombre, 
      //   "descripcion":producto.descripcion, 
      //   "rutaImagen": producto.rutaImagen, 
      //   "precio": producto.precio, 
      //   "cantidadDisponible": nuevaCantidadFinal
      // }
      // this.productosService.updateProductoById(producto.id, prod).subscribe(data => console.log(data))
      localStorage.setItem('mi-carrito',carritoActual)
    }
    
    Swal.fire({
      icon: 'success',
      title: 'Éxito!',
      text: 'Se agregó el producto al carrito!'
    }).then(()=>{
      let nuevaCantidadFinal = producto.cantidadDisponible - cantidad
      const prod = {
        "nombre": producto.nombre, 
        "descripcion":producto.descripcion, 
        "rutaImagen": producto.rutaImagen, 
        "precio": producto.precio, 
        "cantidadDisponible": nuevaCantidadFinal
      }
      this.productosService.updateProductoById(producto.id, prod).subscribe((data:any) => {
        console.log(data) 
        this.verSeleccion = 0 
        this.getProductos()
        return data
      },(error:any) => {
        console.error(error)
      })      
    })
  }
}

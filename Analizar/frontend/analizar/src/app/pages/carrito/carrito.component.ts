import { Component, OnInit } from '@angular/core';
import { retry } from 'rxjs';
import { ProductosService } from 'src/app/productos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  datos: any[] = [];

  total = this.calcularValorTotal()

  constructor(private ProductosService: ProductosService){}

  ngOnInit(){
    this.verCarrito()
  }

  verCarrito(){
    let datos: any[] = [];
    let flag = true;
    if(localStorage.getItem('mi-carrito') != null){
      let carrito = this.obtenerCarritoLocalStorage()
      console.log(carrito)

      for(let item of carrito){
        if(flag){
          datos.push({
            "id": String(item.producto.id),
            "url": item.producto.rutaImagen,
            "tipoProducto": item.tipoProducto,
            "nombre": item.producto.descripcion,
            "cantidad": item.cantidad,
            "precio": item.producto.precio
          })
          flag = false
        } else {
          if(datos.find((el)=> Number(el.id) === item.producto.id) != undefined){
            let datoAModificar = datos.find((el)=> Number(el.id) === item.producto.id);
            datoAModificar!.cantidad += item.cantidad
          }else{
            datos.push({
              "id": String(item.producto.id),
              "url": item.producto.rutaImagen,
              "tipoProducto": item.tipoProducto,
              "nombre": item.producto.descripcion,
              "cantidad": item.cantidad,
              "precio": item.producto.precio
            })
          }
        }
      }

      this.datos = datos
      this.total = this.calcularValorTotal()

    }else{
      console.log('Algo malio sal')
    }
  }

  aumentarCantidad(id:string){
    for(let el of this.datos){
      if(el.id === id){
        this.ProductosService.getProductoById(Number(id)).subscribe(data => {
          console.log(data)
          if(data.cantidadDisponible > 0){
            data.cantidadDisponible -= 1
            this.ProductosService.updateProductoById(Number(id),data).subscribe(data => data)
            el.cantidad += 1
            this.modificarItemCarrito(Number(id),'aumentar',1)
          }else{
            console.log("No quedan mas unidades")
          }
          this.total = this.calcularValorTotal()
        })
        
      }
    }
    
  }

  disminuirCantidad(id:string){
    for(let el of this.datos){
      if(el.id === id){
        if(el.cantidad > 0){
          this.ProductosService.getProductoById(Number(id)).subscribe(data => {
            console.log(data)
            data.cantidadDisponible += 1
            this.ProductosService.updateProductoById(Number(id),data).subscribe(data => data)
            el.cantidad -= 1
            this.modificarItemCarrito(Number(id),'disminuir',1)
            this.total = this.calcularValorTotal()
          })
          
        }
      }
    }
  }

  calcularValorTotal(){
    let total = 0
    let cantidad = 0

    if(this.datos.length > 0){
      for(let el of this.datos){
        total += el.cantidad * el.precio
        cantidad += el.cantidad
      }
    }

    return [total,cantidad]
  }

  eliminarItem(id:string){
    let indice = 0

    for(let i = 0; i < this.datos.length; i++){
      if(this.datos[i].id === id){
        indice = i
        this.ProductosService.getProductoById(Number(id)).subscribe(data => {
          data.cantidadDisponible += this.datos[i].cantidad
          this.ProductosService.updateProductoById(Number(id),data).subscribe(data => data)
          this.datos.splice(indice,1)
          this.modificarItemCarrito(Number(id),'eliminar',0)
          this.total = this.calcularValorTotal()
        })
      }
    }
  }

  obtenerCarritoLocalStorage(){
    return JSON.parse(localStorage.getItem('mi-carrito')!);
  }

  modificarItemCarrito(id:number, tipoModificacion:string, cantidad:number){
    let carrito = this.obtenerCarritoLocalStorage()
    
    for(let item of carrito){
      if(item.producto.id === id){
        
        if(tipoModificacion === 'aumentar'){
          item.cantidad += cantidad
        }
        
        if(tipoModificacion === 'disminuir'){
          item.cantidad -= cantidad
        }
        
        if(tipoModificacion === 'eliminar'){
          let index = carrito.findIndex((el:any)=> el.producto.id === id)
          carrito.splice(index,1)
        }
      }
    }

    this.guardarCarritoLocalStorage(carrito)

  }

  guardarCarritoLocalStorage(carrito:any){
    localStorage.setItem('mi-carrito',JSON.stringify(carrito))
  }
}

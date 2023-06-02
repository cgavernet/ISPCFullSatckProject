import { Component, OnInit } from '@angular/core';
import { retry } from 'rxjs';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  datos: any[] = [];

  total = this.calcularValorTotal()

  constructor(){}

  ngOnInit(){
    this.verCarrito()
  }

  verCarrito(){
    let datos: any[] = [];
    let flag = true;
    if(localStorage.getItem('mi-carrito') != null){
      let carrito = JSON.parse(localStorage.getItem('mi-carrito')!);

      for(let item of carrito){
        if(flag){
          datos.push({
            "id": String(item.producto.id),
            "url": item.producto.ruta_img,
            "tipoProducto": item.tipoProducto,
            "nombre": item.producto.nombre,
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
              "url": item.producto.ruta_img,
              "tipoProducto": item.tipoProducto,
              "nombre": item.producto.nombre,
              "cantidad": item.cantidad,
              "precio": item.producto.precio
            })
          }
        }
        // console.log(datos)
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
        el.cantidad += 1
      }
    }
    this.total = this.calcularValorTotal()
  }

  disminuirCantidad(id:string){
    for(let el of this.datos){
      if(el.id === id){
        if(el.cantidad > 0){
          el.cantidad -= 1
        }
      }
    }
    this.total = this.calcularValorTotal()
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
      }
    }

    this.datos.splice(indice,1)
    this.total = this.calcularValorTotal()
  }
}

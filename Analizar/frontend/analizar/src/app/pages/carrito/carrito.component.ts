import { Component, OnInit } from '@angular/core';
import { retry } from 'rxjs';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  datos = [
    {
      "id": "dato_1",
      "url": "",
      "tipoProducto": "suscripcion",
      "nombre": "suscripcion anual",
      "cantidad": 1,
      "precio": 12000
    },
    {
      "id": "dato_2",
      "url": "",
      "tipoProducto": "medidor",
      "nombre": "medidor JK-2",
      "cantidad": 1,
      "precio": 9200
    },
    {
      "id": "dato_3",
      "url": "",
      "tipoProducto": "medidor",
      "nombre": "medidor JK-4",
      "cantidad": 2,
      "precio": 7500
    },
  ]
  total = this.calcularValorTotal()

  constructor(){}

  ngOnInit(){
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

    for(let el of this.datos){
      total += el.cantidad * el.precio
      cantidad += el.cantidad
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

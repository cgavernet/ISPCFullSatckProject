import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-cliente',
  templateUrl: './dashboard-cliente.component.html',
  styleUrls: ['./dashboard-cliente.component.css']
})
export class DashboardClienteComponent {

  nombre_tabla:string = "mensual"
  titulo_tabla = "Dia"

 datos = {
  "anual": [
    {"id":"Enero", "consumo": 13475, "precio": 0 },
    {"id":"Febrero", "consumo": 11752, "precio": 0 },
    {"id":"Marzo", "consumo": 11005, "precio": 0 },
    {"id":"Abril", "consumo": 9892, "precio": 0 },
    {"id":"Mayo", "consumo": 9467, "precio": 0 }
  ],
  "mensual": [
    {"id":"1", "consumo": 475, "precio": 0 },
    {"id":"2", "consumo": 338, "precio": 0 },
    {"id":"3", "consumo": 514, "precio": 0 },
    {"id":"4", "consumo": 442, "precio": 0 },
    {"id":"5", "consumo": 613, "precio": 0 }
  ],
  "semanal": [
    {"id":"Lunes", "consumo": 475, "precio": 0 },
    {"id":"Martes", "consumo": 338, "precio": 0 },
    {"id":"Miercoles", "consumo": 514, "precio": 0 },
    {"id":"Jueves", "consumo": 442, "precio": 0 },
    {"id":"Viernes", "consumo": 262, "precio": 0 },
    {"id":"Sabado", "consumo": 0, "precio": 0 },
    {"id":"Domingo", "consumo": 0, "precio": 0 },
  ],
  "diario": [
    {"id":"00:00 - 01:00", "consumo": 10, "precio": 0 },
    {"id":"01:00 - 02:00", "consumo": 4, "precio": 0 },
    {"id":"02:00 - 03:00", "consumo": 6, "precio": 0 },
    {"id":"03:00 - 04:00", "consumo": 5, "precio": 0 },
    {"id":"04:00 - 05:00", "consumo": 8, "precio": 0 },
    {"id":"05:00 - 06:00", "consumo": 3, "precio": 0 },
    {"id":"06:00 - 07:00", "consumo": 3, "precio": 0 },
    {"id":"07:00 - 08:00", "consumo": 14, "precio": 0 },
    {"id":"08:00 - 09:00", "consumo": 20, "precio": 0 },
    {"id":"09:00 - 10:00", "consumo": 21, "precio": 0 },
    {"id":"10:00 - 11:00", "consumo": 13, "precio": 0 },
    {"id":"11:00 - 12:00", "consumo": 8, "precio": 0 },
    {"id":"12:00 - 13:00", "consumo": 9, "precio": 0 },
    {"id":"13:00 - 14:00", "consumo": 27, "precio": 0 },
    {"id":"14:00 - 15:00", "consumo": 16, "precio": 0 },
    {"id":"15:00 - 16:00", "consumo": 9, "precio": 0 },
    {"id":"16:00 - 17:00", "consumo": 8, "precio": 0 },
    {"id":"17:00 - 18:00", "consumo": 24, "precio": 0 },
    {"id":"18:00 - 19:00", "consumo": 27, "precio": 0 },
    {"id":"19:00 - 20:00", "consumo": 11, "precio": 0 },
    {"id":"20:00 - 21:00", "consumo": 16, "precio": 0 },
    {"id":"21:00 - 22:00", "consumo": 0, "precio": 0 },
    {"id":"22:00 - 23:00", "consumo": 0, "precio": 0 },
    {"id":"23:00 - 00:00", "consumo": 0, "precio": 0 }
  ]
 }

 datosARecorrer:any = this.datos['mensual'];
 precio:any = Number.parseFloat(localStorage.getItem('costo-luz')!) || 1
  
  constructor(){

  }
  
  ngOnInit(){
    if(localStorage.getItem('costo-luz') === null){
      localStorage.setItem('costo-luz', '15');
    }

    document.getElementById('consumo')!.innerText = String(this.sumarConsumo());
    document.getElementById('precio')!.innerText = String(this.sumarConsumo() * this.precio);
    this.calcularPrecio(this.precio)

  }
  
  //Interactividad para los botones del menu de la tabla
  cambiarVentana(id: string){
    Array.from(document.querySelectorAll('.link-tabla-datos')).forEach(function(item) {
      item.classList.remove('link-tabla-datos-activo')
    })
    document.getElementById(id)?.classList.add('link-tabla-datos-activo')
    this.nombre_tabla = document.getElementById(id)?.textContent || 'mensual';

    switch(this.nombre_tabla){
      case "anual":
        this.titulo_tabla = "Mes"
        this.datosARecorrer = this.datos['anual'];
        this.calcularPrecio(this.precio)
        break
      case "mensual":
        this.titulo_tabla = "Día"
        this.datosARecorrer = this.datos['mensual'];
        this.calcularPrecio(this.precio)
        break
      case "semanal":
        this.titulo_tabla = "Día"
        this.datosARecorrer = this.datos['semanal'];
        this.calcularPrecio(this.precio)
        break
      case "diario":
        this.titulo_tabla = "Hora"
        this.datosARecorrer = this.datos['diario'];
        this.calcularPrecio(this.precio)
        break
    }

    document.getElementById('consumo')!.innerText = String(this.sumarConsumo());
    document.getElementById('precio')!.innerText = String(this.sumarConsumo() * this.precio);
  }

  abrirMasInfo(){
    document.getElementById('tabla')?.classList.add('d-block');
  }

  cerrarMasInfo(){
    document.getElementById('tabla')?.classList.remove('d-block');
  }

  sumarConsumo(){
    let suma = 0

    for(let registro of this.datosARecorrer){
      suma += registro.consumo
    }

    return suma
  }

  calcularPrecio(precio:number){
    for(let registro of this.datosARecorrer){
      registro.precio = (registro.consumo * precio).toFixed(2)
    }
  }

  abrirEditorPrecio(){
    document.getElementById('form-edit-precio')?.classList.add('d-flex');
    // Cargo el valor del precio guardado en localstorage y lo coloco en el input del navegador
    let precioEnMemoria = localStorage.getItem('costo-luz') || '0'
    let inputPrecio = document.getElementById('input-precio') as HTMLInputElement;
    inputPrecio.value = precioEnMemoria; 
  }

  cerrarEditorPrecio(){
    document.getElementById('form-edit-precio')?.classList.remove('d-flex');
  }

  guardarValorPrecioNuevo(){
    let inputPrecio = document.getElementById('input-precio') as HTMLInputElement;
    localStorage.setItem('costo-luz',inputPrecio.value)
    this.precio = Number.parseFloat(localStorage.getItem('costo-luz')!) || 0
    document.getElementById('consumo')!.innerText = String(this.sumarConsumo());
    document.getElementById('precio')!.innerText = String(this.sumarConsumo() * this.precio);
    this.calcularPrecio(this.precio)
    this.cerrarEditorPrecio()
  }
}

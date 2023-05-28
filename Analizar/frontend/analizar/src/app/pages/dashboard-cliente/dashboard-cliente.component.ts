import { Component } from '@angular/core';
import { ConsumoService } from 'src/app/service/consumo.service';

@Component({
  selector: 'app-dashboard-cliente',
  templateUrl: './dashboard-cliente.component.html',
  styleUrls: ['./dashboard-cliente.component.css']
})
export class DashboardClienteComponent {

  nombre_tabla:string = "mensual"
  titulo_tabla = "Dia"
  today = new Date()
  // today = new Date(2023,4,5,16,30)
  fecha_actual = [this.today.getDate(), this.today.getMonth(), this.today.getFullYear()]
  mes = this.getMes(this.fecha_actual[1])
  dia_semana_actual = this.getDiaDeLaSemana(this.today.getDay())

  getMes(mes:number){
    switch(mes){
      case 0:{
        return 'enero'
        break;
      }
      case 1:{
        return 'febrero'
        break;
      }
      case 2:{
        return 'marzo'
        break;
      }
      case 3:{
        return 'abril'
        break;
      }
      case 4:{
        return 'mayo'
        break;
      }
      case 5:{
        return 'junio'
        break;
      }
      case 6:{
        return 'julio'
        break;
      }
      case 7:{
        return 'agosto'
        break;
      }
      case 8:{
        return 'septiembre'
        break;
      }
      case 9:{
        return 'octubre'
        break;
      }
      case 10:{
        return 'noviembre'
        break;
      }
      case 11:{
        return 'diciembre'
        break;
      }
      default:{
        return ''
        break;
      }
    }
  }

  getDiaDeLaSemana(dia:number){
    switch(dia){
      case 0:{
        return 'domingo'
        break;
      }
      case 1:{
        return 'lunes'
        break;
      }
      case 2:{
        return 'martes'
        break;
      }
      case 3:{
        return 'miercoles'
        break;
      }
      case 4:{
        return 'jueves'
        break;
      }
      case 5:{
        return 'viernes'
        break;
      }
      case 6:{
        return 'sabado'
        break;
      }
      case 7:{
        return 'domingo'
        break;
      }
      default:{
        return ''
        break;
      }
    }
  }

  datosConsumo:any;

  datos:any;

  datosARecorrer:any;
  precio:any = Number.parseFloat(localStorage.getItem('costo-luz')!) || 1
  
  constructor( private dataConsumo: ConsumoService ){

  }
  
  ngOnInit(){

    this.cargarDatos()
  }

  cargarDatos(){
    this.dataConsumo.getConsumos().subscribe(data => {

      console.log(data)
      //Guardo la data traida del servidor
      this.datosConsumo = data

      let datos = {
        "anual": [
          {"id":"enero", "consumo": 0, "precio": 0 },
          {"id":"febrero", "consumo": 0, "precio": 0 },
          {"id":"marzo", "consumo": 0, "precio": 0 },
          {"id":"abril", "consumo": 0, "precio": 0 },
          {"id":"mayo", "consumo": 0, "precio": 0 },
          {"id":"junio", "consumo": 0, "precio": 0 },
          {"id":"julio", "consumo": 0, "precio": 0 },
          {"id":"agosto", "consumo": 0, "precio": 0 },
          {"id":"septiembre", "consumo": 0, "precio": 0 },
          {"id":"octubre", "consumo": 0, "precio": 0 },
          {"id":"noviembre", "consumo": 0, "precio": 0 },
          {"id":"diciembre", "consumo": 0, "precio": 0 },
        ],
        "mensual": [
          {"id":"1", "consumo": 0, "precio": 0 },
          {"id":"2", "consumo": 0, "precio": 0 },
          {"id":"3", "consumo": 0, "precio": 0 },
          {"id":"4", "consumo": 0, "precio": 0 },
          {"id":"5", "consumo": 0, "precio": 0 },
          {"id":"6", "consumo": 0, "precio": 0 },
          {"id":"7", "consumo": 0, "precio": 0 },
          {"id":"8", "consumo": 0, "precio": 0 },
          {"id":"9", "consumo": 0, "precio": 0 },
          {"id":"10", "consumo": 0, "precio": 0 },
          {"id":"11", "consumo": 0, "precio": 0 },
          {"id":"12", "consumo": 0, "precio": 0 },
          {"id":"13", "consumo": 0, "precio": 0 },
          {"id":"14", "consumo": 0, "precio": 0 },
          {"id":"15", "consumo": 0, "precio": 0 },
          {"id":"16", "consumo": 0, "precio": 0 },
          {"id":"17", "consumo": 0, "precio": 0 },
          {"id":"18", "consumo": 0, "precio": 0 },
          {"id":"19", "consumo": 0, "precio": 0 },
          {"id":"20", "consumo": 0, "precio": 0 },
          {"id":"21", "consumo": 0, "precio": 0 },
          {"id":"22", "consumo": 0, "precio": 0 },
          {"id":"23", "consumo": 0, "precio": 0 },
          {"id":"24", "consumo": 0, "precio": 0 },
          {"id":"25", "consumo": 0, "precio": 0 },
          {"id":"26", "consumo": 0, "precio": 0 },
          {"id":"27", "consumo": 0, "precio": 0 },
          {"id":"28", "consumo": 0, "precio": 0 },
          {"id":"29", "consumo": 0, "precio": 0 },
          {"id":"30", "consumo": 0, "precio": 0 },
          {"id":"31", "consumo": 0, "precio": 0 },
        ],
        "semanal": [
          {"id":"Lunes", "consumo": 0, "precio": 0 },
          {"id":"Martes", "consumo": 0, "precio": 0 },
          {"id":"Miercoles", "consumo": 0, "precio": 0 },
          {"id":"Jueves", "consumo": 0, "precio": 0 },
          {"id":"Viernes", "consumo": 0, "precio": 0 },
          {"id":"Sabado", "consumo": 0, "precio": 0 },
          {"id":"Domingo", "consumo": 0, "precio": 0 },
        ],
        "diario": [
          {"id":"00:00 - 01:00", "consumo": 0, "precio": 0 },
          {"id":"01:00 - 02:00", "consumo": 0, "precio": 0 },
          {"id":"02:00 - 03:00", "consumo": 0, "precio": 0 },
          {"id":"03:00 - 04:00", "consumo": 0, "precio": 0 },
          {"id":"04:00 - 05:00", "consumo": 0, "precio": 0 },
          {"id":"05:00 - 06:00", "consumo": 0, "precio": 0 },
          {"id":"06:00 - 07:00", "consumo": 0, "precio": 0 },
          {"id":"07:00 - 08:00", "consumo": 0, "precio": 0 },
          {"id":"08:00 - 09:00", "consumo": 0, "precio": 0 },
          {"id":"09:00 - 10:00", "consumo": 0, "precio": 0 },
          {"id":"10:00 - 11:00", "consumo": 0, "precio": 0 },
          {"id":"11:00 - 12:00", "consumo": 0, "precio": 0 },
          {"id":"12:00 - 13:00", "consumo": 0, "precio": 0 },
          {"id":"13:00 - 14:00", "consumo": 0, "precio": 0 },
          {"id":"14:00 - 15:00", "consumo": 0, "precio": 0 },
          {"id":"15:00 - 16:00", "consumo": 0, "precio": 0 },
          {"id":"16:00 - 17:00", "consumo": 0, "precio": 0 },
          {"id":"17:00 - 18:00", "consumo": 0, "precio": 0 },
          {"id":"18:00 - 19:00", "consumo": 0, "precio": 0 },
          {"id":"19:00 - 20:00", "consumo": 0, "precio": 0 },
          {"id":"20:00 - 21:00", "consumo": 0, "precio": 0 },
          {"id":"21:00 - 22:00", "consumo": 0, "precio": 0 },
          {"id":"22:00 - 23:00", "consumo": 0, "precio": 0 },
          {"id":"23:00 - 00:00", "consumo": 0, "precio": 0 }
        ]
      }

      switch(this.mes){
        case "febrero":{
          delete datos.mensual[30]
          delete datos.mensual[29]
          delete datos.mensual[28]
          
          if(!((this.fecha_actual[2] % 4 == 0 && this.fecha_actual[2] % 100 != 0) || this.fecha_actual[2] % 400 == 0)){
            delete datos.mensual[27]
          }
          break
        }
        case "abril" || "junio" || "septiembre" || "noviembre":{
          delete datos.mensual[30]
          break
        }
        default: {
          break
        }
      }

      for(let dato of this.datosConsumo){

        //Transformo las fechas en formato fecha y lo guardo
        dato["fechaMedicion"] = new Date(dato["fechaMedicion"])

        let hora = dato["fechaMedicion"].getHours()
        let dia = dato["fechaMedicion"].getDate()
        let mes = dato["fechaMedicion"].getMonth()
        let anio = dato["fechaMedicion"].getFullYear()
        let diaSemana = this.getDiaDeLaSemana(dato["fechaMedicion"].getDay())
        
        if(anio === this.fecha_actual[2]){
          datos.anual[mes].consumo += dato.consumo

          if(mes === this.fecha_actual[1]){
            datos.mensual[dia - 1].consumo += dato.consumo

            if(dia === this.fecha_actual[0]){
              datos.diario[hora].consumo += dato.consumo

            }

            if(dia >= this.fecha_actual[0] - 7 && dia <= this.fecha_actual[0]){
              switch(this.dia_semana_actual){
                case "lunes":{
                  if(dia === this.fecha_actual[0]){
                    datos.semanal[0].consumo += dato.consumo

                  }
                  break 
                }
                case "martes":{
                  if(dia >= this.fecha_actual[0] - 1){
                    let numeroDiaSemana = dato["fechaMedicion"].getDay()
                    datos.semanal[numeroDiaSemana - 1].consumo += dato.consumo
                  }
                    
                  break
                }
                case "miercoles":{
                  if(dia >= this.fecha_actual[0] - 2){
                    let numeroDiaSemana = dato["fechaMedicion"].getDay()
                    datos.semanal[numeroDiaSemana - 1].consumo += dato.consumo
                  }
                    
                  break
                }
                case "jueves":{
                  if(dia >= this.fecha_actual[0] - 3){
                    let numeroDiaSemana = dato["fechaMedicion"].getDay()
                    datos.semanal[numeroDiaSemana - 1].consumo += dato.consumo
                  }
                    
                  break
                }
                case "viernes":{
                  if(dia >= this.fecha_actual[0] - 4){
                    let numeroDiaSemana = dato["fechaMedicion"].getDay()
                    datos.semanal[numeroDiaSemana - 1].consumo += dato.consumo
                  }
                    
                  break
                }
                case "sabado":{
                  if(dia >= this.fecha_actual[0] - 5){
                    let numeroDiaSemana = dato["fechaMedicion"].getDay()
                    datos.semanal[numeroDiaSemana - 1].consumo += dato.consumo
                  }
                    
                  break
                }
                case "domingo":{
                  if(dia >= this.fecha_actual[0] - 6){
                    let numeroDiaSemana = dato["fechaMedicion"].getDay()
                    datos.semanal[numeroDiaSemana - 1].consumo += dato.consumo
                  }
                    
                  break
                }
                default:{
                  break
                }
              }
            }
            
          }
        }

        


        

      }
  
      this.datos = datos

      this.datosARecorrer = this.datos['mensual'];

      document.getElementById('consumo')!.innerText = String(this.sumarConsumo());
      document.getElementById('precio')!.innerText = (this.sumarConsumo() * this.precio).toFixed(2);
      this.calcularPrecio(this.precio)
      
    })
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
    document.getElementById('precio')!.innerText = (this.sumarConsumo() * this.precio).toFixed(2);
  }

  abrirMasInfo(){
    document.getElementById('tabla')?.classList.add('d-block');
  }

  cerrarMasInfo(){
    document.getElementById('tabla')?.classList.remove('d-block');
  }

  sumarConsumo():number{
    let suma = 0

    for(let registro of this.datosARecorrer){
      suma += registro.consumo
    }

    return Number(suma.toFixed(2))
  }

  calcularPrecio(precio:number){
    for(let registro of this.datosARecorrer){
      registro.precio = Number((registro.consumo * precio).toFixed(2))
      registro.consumo = Number(registro.consumo.toFixed(2))
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
    document.getElementById('precio')!.innerText = (this.sumarConsumo() * this.precio).toFixed(2);
    this.calcularPrecio(this.precio)
    this.cerrarEditorPrecio()
  }
}

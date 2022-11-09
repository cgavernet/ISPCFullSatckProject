
// ------------------------------------------------- Variables -------------------------------------------------

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
let fecha_hoy = new Date();
let anio = fecha_hoy.getFullYear()
let mes = fecha_hoy.getMonth() //El mes 0 es enero
let dia = fecha_hoy.getDay() //El dia 0 es domingo
let numeroDia = fecha_hoy.getDate()
let horaDelDia = fecha_hoy.getHours()
let ventana = 'mensual'
let costowh = Number(localStorage.getItem('costo-luz'));
let consumoVista = document.getElementById('consumo')
let precioVista = document.getElementById('precio')
let btnAnual = document.getElementById('btn-anual')
let btnMensual = document.getElementById('btn-mensual')
let btnSemanal = document.getElementById('btn-semanal')
let btnDiario = document.getElementById('btn-diario')
let tituloTablaDatos = document.getElementById('tipo-tabla')
let tablaDatos = document.getElementById('tabla-datos')
let htmlTablaDatos = ''

// ------------------------------------------------- Genero datos aleatorios -------------------------------------------------

let registroAnual = {}
let consumoAnual = 0
for(let i = 0; i < mes + 1; i++){
    let consumo = Math.round(Math.random() * (1600 - 150) + 150)
    registroAnual[meses[i]] = {
        "id": meses[i],
        "consumo": consumo,
        "precio": consumo * costowh
    }
    consumoAnual += consumo
}

let registroMensual = {}
let consumoMensual = 0
for(let i = 1; i < numeroDia + 1; i++){
    let consumo = Math.round(Math.random() * (50 - 1) + 1)
    registroMensual[i] = {
        "id": i,
        "consumo": consumo,
        "precio": consumo * costowh
    }
    consumoMensual += consumo
}

let registroSemanal = {}
let consumoSemanal = 0
for(let i = 1; i < dia + 1; i++){
    let consumo = Math.round(Math.random() * (350 - 170) + 170)
    registroSemanal[dias[i]] = {
        "id": dias[i],
        "consumo": consumo,
        "precio": consumo * costowh
    }
    consumoSemanal += consumo
}

let registroDiario = {}
let consumoDiario = 0
for(let i = 1; i < horaDelDia + 1; i++){
    let consumo = Math.round(Math.random() * (10 - 1) + 1)
    registroDiario[i] = {
        "id": i,
        "consumo": consumo,
        "precio": consumo * costowh
    }
    consumoDiario += consumo
}

// ------------------------------------------------- Genero valores por defecto -------------------------------------------------

// Valores por defecto del monto de consumo y costo de consumo
consumoVista.innerHTML = consumoMensual
precioVista.innerHTML = consumoMensual * costowh

// ------------------------------------------------- Genero eventos para los botones -------------------------------------------------

/*
Establezco el valor del costo del wh para actualizarlo
Establezco cual es la ventana sobre la que clickeo
Establezco el monto del consumo
Establezco el costo del consumo
Defino el titulo de la tabla
Genero dinamicamente la tabla
Establezco la nueva tabla
*/

btnAnual.addEventListener('click',()=>{
    costowh = Number(localStorage.getItem('costo-luz'));
    ventana = 'anual'
    consumoVista.innerHTML = consumoAnual
    precioVista.innerHTML = consumoAnual * costowh

    tituloTablaDatos.innerHTML = 'Anual'

    htmlTablaDatos = `<tr>
    <th>Mes</th>
    <th>Consumo</th>
    <th>Costo</th>
    </tr>`

    for(let mes in registroAnual){
        let registro = registroAnual[mes]
        htmlTablaDatos += `<tr>
        <td>${registro.id}</td>
        <td>${registro.consumo}w/h</td>
        <td>$${registro.precio}</td>
        </tr>`
    }

    tablaDatos.innerHTML = htmlTablaDatos
})


btnMensual.addEventListener('click',()=>{
    costowh = Number(localStorage.getItem('costo-luz'));
    ventana = 'mensual'
    consumoVista.innerHTML = consumoMensual
    precioVista.innerHTML = consumoMensual * costowh

    tituloTablaDatos.innerHTML = 'Mensual'

            htmlTablaDatos = `<tr>
            <th>Día</th>
            <th>Consumo</th>
            <th>Costo</th>
          </tr>`

          for(let dia in registroMensual){
            let registro = registroMensual[dia]
            htmlTablaDatos += `<tr>
            <td>${registro.id}</td>
            <td>${registro.consumo}w/h</td>
            <td>$${registro.precio}</td>
          </tr>`
          }

          tablaDatos.innerHTML = htmlTablaDatos
})

btnSemanal.addEventListener('click',()=>{
    costowh = Number(localStorage.getItem('costo-luz'));
    ventana = 'semanal'
    consumoVista.innerHTML = consumoSemanal
    precioVista.innerHTML = consumoSemanal * costowh

    tituloTablaDatos.innerHTML = 'Semanal'

            htmlTablaDatos = `<tr>
            <th>Día</th>
            <th>Consumo</th>
            <th>Costo</th>
          </tr>`

          for(let dia in registroSemanal){
            let registro = registroSemanal[dia]
            htmlTablaDatos += `<tr>
            <td>${registro.id}</td>
            <td>${registro.consumo}w/h</td>
            <td>$${registro.precio}</td>
          </tr>`
          }

          tablaDatos.innerHTML = htmlTablaDatos
})

btnDiario.addEventListener('click',()=>{
    costowh = Number(localStorage.getItem('costo-luz'));
    ventana = 'diaria'
    consumoVista.innerHTML = consumoDiario
    precioVista.innerHTML = consumoDiario * costowh

    tituloTablaDatos.innerHTML = 'Diaria'

            htmlTablaDatos = `<tr>
            <th>Hora</th>
            <th>Consumo</th>
            <th>Costo</th>
          </tr>`

          for(let hora in registroDiario){
            let registro = registroDiario[hora]
            htmlTablaDatos += `<tr>
            <td>${registro.id}</td>
            <td>${registro.consumo}w/h</td>
            <td>$${registro.precio}</td>
          </tr>`
          }

          tablaDatos.innerHTML = htmlTablaDatos
})

// Defino que al abrir la ventana se actualize por si aun no lo hizo
btnOpenTabla.addEventListener('click', updateTabla) 

// ------------------------------------------------- Genero funciones de actualizacion -------------------------------------------------

function updateTabla(){
    switch(ventana){
        case 'diaria':
        
            tituloTablaDatos.innerHTML = 'Diaria'

            htmlTablaDatos = `<tr>
            <th>Hora</th>
            <th>Consumo</th>
            <th>Costo</th>
          </tr>`

          for(let hora in registroDiario){
            let registro = registroDiario[hora]
            htmlTablaDatos += `<tr>
            <td>${registro.id}</td>
            <td>${registro.consumo}w/h</td>
            <td>$${registro.precio}</td>
          </tr>`
          }

          tablaDatos.innerHTML = htmlTablaDatos
            

            break
        case 'semanal':
            tituloTablaDatos.innerHTML = 'Semanal'

            htmlTablaDatos = `<tr>
            <th>Día</th>
            <th>Consumo</th>
            <th>Costo</th>
          </tr>`

          for(let dia in registroSemanal){
            let registro = registroSemanal[dia]
            htmlTablaDatos += `<tr>
            <td>${registro.id}</td>
            <td>${registro.consumo}w/h</td>
            <td>$${registro.precio}</td>
          </tr>`
          }

          tablaDatos.innerHTML = htmlTablaDatos
            break
        case 'mensual':
            tituloTablaDatos.innerHTML = 'Mensual'

            htmlTablaDatos = `<tr>
            <th>Día</th>
            <th>Consumo</th>
            <th>Costo</th>
          </tr>`

          for(let dia in registroMensual){
            let registro = registroMensual[dia]
            htmlTablaDatos += `<tr>
            <td>${registro.id}</td>
            <td>${registro.consumo}w/h</td>
            <td>$${registro.precio}</td>
          </tr>`
          }

          tablaDatos.innerHTML = htmlTablaDatos
            break
        case 'anual':
            tituloTablaDatos.innerHTML = 'Anual'

            htmlTablaDatos = `<tr>
            <th>Mes</th>
            <th>Consumo</th>
            <th>Costo</th>
          </tr>`

          for(let mes in registroAnual){
            let registro = registroAnual[mes]
            htmlTablaDatos += `<tr>
            <td>${registro.id}</td>
            <td>${registro.consumo}w/h</td>
            <td>$${registro.precio}</td>
          </tr>`
          }

          tablaDatos.innerHTML = htmlTablaDatos
            break
        default:
            alert('Algo paso')
    }
}

// Ante cambios en el costo del wh genero una actualizacion de los costos en cada tabla y el costo del consumo general
function updateCostos(){
    costowh = Number(localStorage.getItem('costo-luz'));
    switch(ventana){
        case 'diaria':
            precioVista.innerHTML = consumoDiario * costowh
            break
        case 'semanal':
            precioVista.innerHTML = consumoSemanal * costowh
            
            break
        case 'mensual':
            precioVista.innerHTML = consumoMensual * costowh
           
            break
        case 'anual':
            precioVista.innerHTML = consumoAnual * costowh
            break
        default:
            alert('Algo paso')
    }
    for(let hora in registroDiario){
        let registro = registroDiario[hora]
        registro.precio = registro.consumo * costowh
        registroDiario[hora].precio = registro.precio
    }
    for(let dia in registroSemanal){
        let registro = registroSemanal[dia]
        registro.precio = registro.consumo * costowh
        registroSemanal[dia].precio = registro.precio
    }
    for(let dia in registroMensual){
        let registro = registroMensual[dia]
        registro.precio = registro.consumo * costowh
        registroMensual[dia].precio = registro.precio
    }
    for(let mes in registroAnual){
        let registro = registroAnual[mes]
        registro.precio = registro.consumo * costowh
        registroAnual[mes].precio = registro.precio
    }
}
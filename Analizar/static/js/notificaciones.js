let btnNuevaAlerta = document.getElementById('btn-nueva-alerta');
let btnsEditAlerta = document.getElementsByClassName('btn-alerta-editar');
let contenedorAlertas = document.getElementById('contenedor-alertas');
let contenedorPrincipalAlertas = document.getElementById('contenedor-principal-alertas');
let formularioNuevaAlerta = document.getElementById('form-nueva-alerta');
let formularioEditarAlerta = document.getElementById('form-edit-alerta');
let cerrarFormularioNuevaAlerta = document.getElementById('btn-close-nueva-alerta');
let cerrarFormularioEditarAlerta = document.getElementById('btn-close-edit-alerta');
let btnGuardarEdit = document.getElementById('btn-save-edit-alerta');
let btnGuardarNueva = document.getElementById('btn-save-nueva-alerta');
let nroAlerta = 5; //Deberia empezar en 1 cuando esto sea dinamico
let alertas = {
    'alerta1':{
        'codigo':'alerta1',
        'cantidad': 150,
        'tipoAlerta': 'Diario'
    },
    'alerta2':{
        'codigo':'alerta2',
        'cantidad': 750,
        'tipoAlerta': 'Mensual'
    },
    'alerta3':{
        'codigo':'alerta3',
        'cantidad': 420,
        'tipoAlerta': 'Semanal'
    },
    'alerta4':{
        'codigo':'alerta4',
        'cantidad': 10000,
        'tipoAlerta': 'Anual'
    }
}

btnNuevaAlerta.addEventListener('click',()=>{
    contenedorAlertas.classList.add('d-none')
    contenedorAlertas.classList.remove('d-grid')
    formularioNuevaAlerta.classList.add('d-flex')
    formularioNuevaAlerta.classList.remove('d-none')
})

cerrarFormularioNuevaAlerta.addEventListener('click', ()=>{
    formularioNuevaAlerta.classList.add('d-none')
    formularioNuevaAlerta.classList.remove('d-flex')
    contenedorAlertas.classList.add('d-grid')
    contenedorAlertas.classList.remove('d-none')
})

cerrarFormularioEditarAlerta.addEventListener('click',()=>{
    contenedorAlertas.classList.add('d-grid')
    contenedorAlertas.classList.remove('d-none')
    formularioEditarAlerta.classList.add('d-none')
    formularioEditarAlerta.classList.remove('d-flex')
})

btnGuardarEdit.addEventListener('click',()=>{
    let idAlerta = document.getElementById('input-idAlerta-edit').getAttribute('value')
    let cantidadAlerta = document.getElementById('input-cantidadwh-edit').value
    let tipoAlerta = document.getElementById('tipo-alerta-edit').value

    alertas[idAlerta].codigo = idAlerta
    alertas[idAlerta].cantidad = cantidadAlerta
    alertas[idAlerta].tipoAlerta = tipoAlerta

    document.getElementById(`texto-alerta-${idAlerta}`).innerHTML = `Si el consmo supera los <b>${cantidadAlerta}</b> w/h envio una alerta como precaucion`

    contenedorAlertas.classList.add('d-grid')
    contenedorAlertas.classList.remove('d-none')
    formularioEditarAlerta.classList.add('d-none')
    formularioEditarAlerta.classList.remove('d-flex')
})

btnGuardarNueva.addEventListener('click',()=>{
    let cantidadWhNew = document.getElementById('input-cantidadwh-new').value
    let tipoNew = document.getElementById('tipo-alerta-new').value

    let idAlerta = `alerta${nroAlerta}`
    nroAlerta += 1

    alertas[idAlerta] = {}

    alertas[idAlerta].codigo = idAlerta
    alertas[idAlerta].cantidad = cantidadWhNew
    alertas[idAlerta].tipoAlerta = tipoNew

    for(let alerta in alertas){
        console.log(alertas[alerta].codigo)
    }

    showNewAlert(idAlerta)

    formularioNuevaAlerta.classList.add('d-none')
    formularioNuevaAlerta.classList.remove('d-flex')
    contenedorAlertas.classList.add('d-grid')
    contenedorAlertas.classList.remove('d-none')
})

function showNewAlert(id){
    let alertaSelect = alertas[id];

    let divAlerta = document.createElement('DIV');
    divAlerta.classList.add('alerta')
    divAlerta.setAttribute('id',`div-${alertaSelect.codigo}`)
    contenedorAlertas.appendChild(divAlerta)

    let tituloAlerta = document.createElement('H2');
    tituloAlerta.textContent = 'Alerta'
    tituloAlerta.classList.add('titulo-alerta')
    divAlerta.appendChild(tituloAlerta)
    
    let parrafoAlerta = document.createElement('P')
    parrafoAlerta.innerHTML = `Si el consmo supera los <b>${alertaSelect.cantidad}</b> w/h envio una alerta como precaucion`
    parrafoAlerta.classList.add('texto-alerta')
    parrafoAlerta.setAttribute('id',`texto-alerta-${alertaSelect.codigo}`)
    divAlerta.appendChild(parrafoAlerta)

    let contenedorBtnAlerta = document.createElement('DIV');
    contenedorBtnAlerta.classList.add('contenedor-botones-alerta')
    divAlerta.appendChild(contenedorBtnAlerta)

    let btnEditarAlerta = document.createElement('BUTTON')
    btnEditarAlerta.classList.add('btn-alerta')
    btnEditarAlerta.classList.add('btn-alerta-editar')
    btnEditarAlerta.textContent = 'editar'
    contenedorBtnAlerta.appendChild(btnEditarAlerta)
    
    let btnEliminarAlerta = document.createElement('BUTTON')
    btnEliminarAlerta.classList.add('btn-alerta')
    btnEliminarAlerta.classList.add('btn-alerta-eliminar')
    btnEliminarAlerta.textContent = 'eliminar'
    contenedorBtnAlerta.appendChild(btnEliminarAlerta)

    btnEditarAlerta.addEventListener('click',()=>{
        contenedorAlertas.classList.add('d-none')
        contenedorAlertas.classList.remove('d-grid')
        formularioEditarAlerta.classList.add('d-flex')
        formularioEditarAlerta.classList.remove('d-none')
        document.getElementById('input-idAlerta-edit').value = alertaSelect.codigo
        document.getElementById('input-cantidadwh-edit').value = alertaSelect.cantidad
        let optionsSelectEdit = document.querySelectorAll('#tipo-alerta-edit > option');
        optionsSelectEdit.forEach(el => {
            if(el.value === alertaSelect.tipoAlerta.toLowerCase()){
                el.setAttribute('selected',true)
                el.setAttributeNode(el.getAttribute('selected'))
            }else{
                el.removeAttribute('selected')
            }
            
        })
    })

    btnEliminarAlerta.addEventListener('click',()=>{
        divAlerta.parentElement.removeChild(divAlerta)
        delete alertas[id]
    })
}

function showAlertas(){
    for(let alerta in alertas){
        let alertaSelect = alertas[alerta];

        let divAlerta = document.createElement('DIV');
        divAlerta.classList.add('alerta')
        divAlerta.setAttribute('id',`div-${alertaSelect.codigo}`)
        contenedorAlertas.appendChild(divAlerta)

        let tituloAlerta = document.createElement('H2');
        tituloAlerta.textContent = 'Alerta'
        tituloAlerta.classList.add('titulo-alerta')
        divAlerta.appendChild(tituloAlerta)
        
        let parrafoAlerta = document.createElement('P')
        parrafoAlerta.innerHTML = `Si el consmo supera los <b>${alertaSelect.cantidad}</b> w/h envio una alerta como precaucion`
        parrafoAlerta.classList.add('texto-alerta')
        parrafoAlerta.setAttribute('id',`texto-alerta-${alerta}`)
        divAlerta.appendChild(parrafoAlerta)

        let contenedorBtnAlerta = document.createElement('DIV');
        contenedorBtnAlerta.classList.add('contenedor-botones-alerta')
        divAlerta.appendChild(contenedorBtnAlerta)

        let btnEditarAlerta = document.createElement('BUTTON')
        btnEditarAlerta.classList.add('btn-alerta')
        btnEditarAlerta.classList.add('btn-alerta-editar')
        btnEditarAlerta.textContent = 'editar'
        contenedorBtnAlerta.appendChild(btnEditarAlerta)
        
        let btnEliminarAlerta = document.createElement('BUTTON')
        btnEliminarAlerta.classList.add('btn-alerta')
        btnEliminarAlerta.classList.add('btn-alerta-eliminar')
        btnEliminarAlerta.textContent = 'eliminar'
        contenedorBtnAlerta.appendChild(btnEliminarAlerta)

        btnEditarAlerta.addEventListener('click',()=>{
            contenedorAlertas.classList.add('d-none')
            contenedorAlertas.classList.remove('d-grid')
            formularioEditarAlerta.classList.add('d-flex')
            formularioEditarAlerta.classList.remove('d-none')
            document.getElementById('input-idAlerta-edit').value = alertaSelect.codigo
            document.getElementById('input-cantidadwh-edit').value = alertaSelect.cantidad
            let optionsSelectEdit = document.querySelectorAll('#tipo-alerta-edit > option');
            optionsSelectEdit.forEach(el => {
                if(el.value === alertaSelect.tipoAlerta.toLowerCase()){
                    el.setAttribute('selected',true)
                    el.setAttributeNode(el.getAttribute('selected'))
                }else{
                    el.removeAttribute('selected')
                }
            })
        })

        btnEliminarAlerta.addEventListener('click',()=>{
            divAlerta.parentElement.removeChild(divAlerta)
            delete alertas[alerta]
        })
    }

}
showAlertas()

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

// for(let i = 0; i < btnsEditAlerta.length; i++){
//     btnsEditAlerta[i].addEventListener('click',()=>{
//         contenedorAlertas.classList.add('d-none')
//         contenedorAlertas.classList.remove('d-grid')
//         formularioEditarAlerta.classList.add('d-flex')
//         formularioEditarAlerta.classList.remove('d-none')
//     })
// }

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

    // console.log(idAlerta)
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
        // openEditAlert(alerta)
        contenedorAlertas.classList.add('d-none')
        contenedorAlertas.classList.remove('d-grid')
        formularioEditarAlerta.classList.add('d-flex')
        formularioEditarAlerta.classList.remove('d-none')
        document.getElementById('input-idAlerta-edit').value = alertaSelect.codigo
        document.getElementById('input-cantidadwh-edit').value = alertaSelect.cantidad
        let optionsSelectEdit = document.querySelectorAll('#tipo-alerta-edit > option');
        optionsSelectEdit.forEach(el => {
            if(el.value === alertaSelect.tipoAlerta.toLowerCase()){
                // console.log(el.getAttribute().name)
                el.setAttribute('selected',true)

                // let selected = document.createAttribute('selected')
                el.setAttributeNode(el.getAttribute('selected'))
            }else{
                el.removeAttribute('selected')
            }
            
        })
        
        // document.getElementById('tipo-alerta-edit').value = alertaSelect.tipoAlerta
    })

    btnEliminarAlerta.addEventListener('click',()=>{
        alert('Elemento eliminado (?')
    })
}

function showAlertas(){
    for(let alerta in alertas){
        let alertaSelect = alertas[alerta];

        let divAlerta = document.createElement('DIV');
        divAlerta.classList.add('alerta')
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
            // openEditAlert(alerta)
            contenedorAlertas.classList.add('d-none')
            contenedorAlertas.classList.remove('d-grid')
            formularioEditarAlerta.classList.add('d-flex')
            formularioEditarAlerta.classList.remove('d-none')
            document.getElementById('input-idAlerta-edit').value = alertaSelect.codigo
            document.getElementById('input-cantidadwh-edit').value = alertaSelect.cantidad
            let optionsSelectEdit = document.querySelectorAll('#tipo-alerta-edit > option');
            optionsSelectEdit.forEach(el => {
                if(el.value === alertaSelect.tipoAlerta.toLowerCase()){
                    // console.log(el.getAttribute().name)
                    el.setAttribute('selected',true)

                    // let selected = document.createAttribute('selected')
                    el.setAttributeNode(el.getAttribute('selected'))
                }else{
                    el.removeAttribute('selected')
                }
                
            })
            
            // document.getElementById('tipo-alerta-edit').value = alertaSelect.tipoAlerta
        })

        btnEliminarAlerta.addEventListener('click',()=>{
            alert('Elemento eliminado (?')
        })
    }

}
showAlertas()

//Generar el formulario mediante una funcion que tome un id para poder vincularlo.. esa id db estar een el AEL como parametro
// function openEditAlert(id){
    
//     //Form
//     let formEdit = document.createElement('FORM')
//     formEdit.classList.add('formulario-nueva-alerta')
//     formEdit.setAttribute('id','form-edit-alerta')
//     contenedorPrincipalAlertas.appendChild(formEdit)

//     //P
//     let tituloFormEdit = document.createElement('P')
//     tituloFormEdit.classList.add('title-formulario-alerta')
//     tituloFormEdit.textContent = 'Modo editar alerta!'
//     formEdit.appendChild(tituloFormEdit)

//     //Div
//     let divContInputFormEdit = document.createElement('DIV')
//     divContInputFormEdit.classList.add('inputContainer')
//     formEdit.appendChild(divContInputFormEdit)

//     //Input
//     let inputCantidadFormEdit = document.createElement('INPUT')
//     inputCantidadFormEdit.classList.add('input')
//     inputCantidadFormEdit.setAttribute('type','number')
//     inputCantidadFormEdit.setAttribute('placeholder','Ingresa la cantidad de w/h')
//     inputCantidadFormEdit.setAttribute('name','cantidad')
//     inputCantidadFormEdit.setAttribute('value',alertas[id].cantidad)
//     inputCantidadFormEdit.setAttribute('id',`input-precio-${id}`)
//     divContInputFormEdit.appendChild(inputCantidadFormEdit)
//     document.getElementById(`input-precio-${id}`).value = alertas[id].cantidad

//     //Label
//     let labelCantidadFormEdit = document.createElement('LABEL')
//     labelCantidadFormEdit.classList.add('label')
//     labelCantidadFormEdit.setAttribute('for','input-precio')
//     labelCantidadFormEdit.textContent = 'Cantidad w/h'
//     divContInputFormEdit.appendChild(labelCantidadFormEdit)

//     //Div
//     let divContSelectFormEdit = document.createElement('DIV')
//     divContSelectFormEdit.classList.add('inputContainer')
//     formEdit.appendChild(divContSelectFormEdit)

//     //Select
//     let selectFormEdit = document.createElement('SELECT')
//     selectFormEdit.classList.add('tipo-alerta')
//     selectFormEdit.setAttribute('name','tipo-alerta')
//     selectFormEdit.setAttribute('id','tipo-alerta')
//     divContSelectFormEdit.appendChild(selectFormEdit)

//     //Option1
//     let option1FormEdit = document.createElement('OPTION')
//     option1FormEdit.setAttribute('selected','selected')
//     option1FormEdit.setAttribute('disabled','disabled')
//     option1FormEdit.textContent = 'Elije el tipo de alerta'
//     selectFormEdit.appendChild(option1FormEdit)

//     //Option2
//     let option2FormEdit = document.createElement('OPTION')
//     option2FormEdit.setAttribute('value','diario')
//     option2FormEdit.textContent = 'Diario'
//     selectFormEdit.appendChild(option2FormEdit)

//     //Option3
//     let option3FormEdit = document.createElement('OPTION')
//     option3FormEdit.setAttribute('value','semanal')
//     option3FormEdit.textContent = 'Semanal'
//     selectFormEdit.appendChild(option3FormEdit)

//     //Option4
//     let option4FormEdit = document.createElement('OPTION')
//     option4FormEdit.setAttribute('value','mensual')
//     option4FormEdit.textContent = 'Mensual'
//     selectFormEdit.appendChild(option4FormEdit)

//     //Option5
//     let option5FormEdit = document.createElement('OPTION')
//     option5FormEdit.setAttribute('value','anual')
//     option5FormEdit.textContent = 'Anual'
//     selectFormEdit.appendChild(option5FormEdit)

//     //Div
//     let divContBtnFormEdit = document.createElement('DIV')
//     divContBtnFormEdit.classList.add('btnContainer')
//     formEdit.appendChild(divContBtnFormEdit)

//     //Boton editar
//     let btnEditarFormEdit = document.createElement('BUTTON')
//     btnEditarFormEdit.classList.add('submitBtn')
//     btnEditarFormEdit.classList.add('saveBtn')
//     btnEditarFormEdit.setAttribute('type','button')
//     btnEditarFormEdit.setAttribute('id','btn-save-edit-alerta')
//     btnEditarFormEdit.textContent = 'Guardar'
//     divContBtnFormEdit.appendChild(btnEditarFormEdit)

//     //Boton Cancelar
//     let btnCancelarFormEdit = document.createElement('BUTTON')
//     btnCancelarFormEdit.classList.add('submitBtn')
//     btnCancelarFormEdit.classList.add('cancelBtn')
//     btnCancelarFormEdit.setAttribute('type','button')
//     btnCancelarFormEdit.setAttribute('id','btn-close-edit-alerta')
//     btnCancelarFormEdit.textContent = 'Cancelar'
//     divContBtnFormEdit.appendChild(btnCancelarFormEdit)

//     //Generar la vista del formulario
//     contenedorAlertas.classList.add('d-none')
//     contenedorAlertas.classList.remove('d-grid')
//     formEdit.classList.add('d-flex')
//     formEdit.classList.remove('d-none')

//     //Funcionalidad al boton guardar
//     btnEditarFormEdit.addEventListener('click',()=>{
//         alert(document.getElementById(`input-precio-${id}`).value)
//         alertas[id].cantidad = document.getElementById(`input-precio-${id}`).value
//         document.getElementById(`texto-alerta-${id}`).textContent = `Si el consmo supera los ${alertas[id].cantidad} w/h envio una alerta como precaucion`

//         //Cuando salgo me deja de andar, creo que debo usar el form del html y tratar de vincularlo con cada boton de alguna forma

//         formEdit.classList.add('d-none')
//         formEdit.classList.remove('d-flex')
//         contenedorAlertas.classList.add('d-grid')
//         contenedorAlertas.classList.remove('d-none')
//     })

//     //Funcionalidad al boton cancelar
//     btnCancelarFormEdit.addEventListener('click', ()=>{
//         formEdit.classList.add('d-none')
//         formEdit.classList.remove('d-flex')
//         contenedorAlertas.classList.add('d-grid')
//         contenedorAlertas.classList.remove('d-none')
//     })
// }
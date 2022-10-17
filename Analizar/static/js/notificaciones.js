let btnNuevaAlerta = document.getElementById('btn-nueva-alerta');
let btnsEditAlerta = document.getElementsByClassName('btn-alerta-editar');
let contenedorAlertas = document.getElementById('contenedor-alertas');
let formularioNuevaAlerta = document.getElementById('form-nueva-alerta');
let formularioEditarAlerta = document.getElementById('form-edit-alerta');
let cerrarFormularioNuevaAlerta = document.getElementById('btn-close-nueva-alerta');
let cerrarFormularioEditarAlerta = document.getElementById('btn-close-edit-alerta');

btnNuevaAlerta.addEventListener('click',()=>{
    contenedorAlertas.classList.add('d-none')
    formularioNuevaAlerta.classList.add('d-flex');
})

cerrarFormularioNuevaAlerta.addEventListener('click', ()=>{
    formularioNuevaAlerta.classList.add('d-none');
    contenedorAlertas.classList.add('d-grid')
    contenedorAlertas.classList.remove('d-none')
})

for(let i = 0; i < btnsEditAlerta.length; i++){
    btnsEditAlerta[i].addEventListener('click',()=>{
        contenedorAlertas.classList.add('d-none')
        formularioEditarAlerta.classList.add('d-flex');
    })
}

cerrarFormularioEditarAlerta.addEventListener('click', ()=>{
    formularioEditarAlerta.classList.add('d-none');
    contenedorAlertas.classList.add('d-grid')
    contenedorAlertas.classList.remove('d-none')
})
//Interactividad para los botones del menu de la tabla
let links = document.querySelectorAll('.link-tabla-datos');

for(let i = 0; i < links.length; i++){
    links[i].addEventListener('click',()=>{
        links.forEach(el => el.classList.remove('link-tabla-datos-activo'))
        links[i].classList.add('link-tabla-datos-activo')
    })
}


// Interactividad para el boton mas info (abrir tabla)
let btnOpenTabla = document.getElementById('open-tabla');

btnOpenTabla.addEventListener('click', ()=>{
    document.getElementById('tabla').classList.add('d-block');
})


// Interactividad para el boton de cerrar de la tabla (cerrar tabla)
let btnCloseTabla = document.getElementById('close-tabla');

btnCloseTabla.addEventListener('click', ()=>{
    document.getElementById('tabla').classList.remove('d-block');
})


// Interactividad para boton de abrir editor de precio
let btnOpenEdit = document.getElementById('btn-open-edit-precio');
btnOpenEdit.addEventListener('click', ()=>{
    document.getElementById('form-edit-precio').classList.add('d-flex');
})


// Interactividad para boton de cerrar editor de precio
let btnCloseEdit = document.getElementById('btn-close-edit-precio');
btnCloseEdit.addEventListener('click', ()=>{
    document.getElementById('form-edit-precio').classList.remove('d-flex');
})


// Variable que contendra el valor del precio guardado en la cache del navegador
let precioEnMemoria = Number(localStorage.getItem('costo-luz'))

// Funcion que carga el valor del precio guardado en el input del navegador
function cargarDatos() {
    document.getElementById('input-precio').setAttribute('value',precioEnMemoria); 
}


// Interactividad que guarda el valor del precio ingresado en el input del navegador
document.getElementById('btn-save-edit-precio').addEventListener('click',guardarDato);

function guardarDato(){
    let nuevoPrecio = document.getElementById('input-precio').getAttribute('value');
    localStorage.setItem('costo-luz',nuevoPrecio);
    document.getElementById('form-edit-precio').classList.remove('d-flex');
}
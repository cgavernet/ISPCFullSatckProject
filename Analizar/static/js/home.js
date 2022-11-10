
// ------------------------------------------------- Variables -------------------------------------------------

let links = document.querySelectorAll('.link-tabla-datos');
let btnOpenTabla = document.getElementById('open-tabla');
let btnCloseTabla = document.getElementById('close-tabla');
let btnOpenEdit = document.getElementById('btn-open-edit-precio');
let btnCloseEdit = document.getElementById('btn-close-edit-precio');
let btnSavePrecio = document.getElementById('btn-save-edit-precio');
let ventanaEditPrecio = document.getElementById('form-edit-precio');
let inputPrecio = document.getElementById('input-precio');

// ------------------------------------------------- Genero valores por defecto -------------------------------------------------

if(localStorage.getItem('costo-luz') === null){
    localStorage.setItem('costo-luz',15);
}

// ------------------------------------------------- Genero eventos para los botones -------------------------------------------------

//Interactividad para los botones del menu de la tabla
for(let i = 0; i < links.length; i++){
    links[i].addEventListener('click',()=>{
        links.forEach(el => el.classList.remove('link-tabla-datos-activo'))
        links[i].classList.add('link-tabla-datos-activo')
    })
}

// Interactividad para el boton mas info (abrir tabla)
btnOpenTabla.addEventListener('click', ()=>{
    document.getElementById('tabla').classList.add('d-block');
})

// Interactividad para el boton de cerrar de la tabla (cerrar tabla)
btnCloseTabla.addEventListener('click', ()=>{
    document.getElementById('tabla').classList.remove('d-block');
})

// Interactividad para boton de abrir editor de precio
btnOpenEdit.addEventListener('click', ()=>{
    ventanaEditPrecio.classList.add('d-flex');
    // Cargo el valor del precio guardado en localstorage y lo coloco en el input del navegador
    let precioEnMemoria = Number(localStorage.getItem('costo-luz'))
    inputPrecio.value = precioEnMemoria; 
})

// Interactividad para boton de cerrar editor de precio
btnCloseEdit.addEventListener('click', ()=>{
    ventanaEditPrecio.classList.remove('d-flex');
})

// Interactividad que guarda el valor del precio ingresado en el input del navegador
btnSavePrecio.addEventListener('click',guardarDato);

// ------------------------------------------------- Funciones -------------------------------------------------

/*
Cierro tabla
Guardo el valor introducido como nuevo precio
Guardo nuevo precio en localstorage
Cierro ventana de nuevo precio
Actualizo costos y tabla
*/
function guardarDato(){
    document.getElementById('tabla').classList.remove('d-block');
    let nuevoPrecio = document.getElementById('input-precio').value;
    localStorage.setItem('costo-luz',nuevoPrecio);
    document.getElementById('form-edit-precio').classList.remove('d-flex');
    updateCostos()
    updateTabla()
}
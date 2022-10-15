let links = document.querySelectorAll('.link-tabla-datos');

for(let i = 0; i < links.length; i++){
    links[i].addEventListener('click',()=>{
        links.forEach(el => el.classList.remove('link-tabla-datos-activo'))
        links[i].classList.add('link-tabla-datos-activo')
    })
}

let btnOpenTabla = document.getElementById('open-tabla');

btnOpenTabla.addEventListener('click', ()=>{
    document.getElementById('tabla').classList.add('d-block');
})
let btnCloseTabla = document.getElementById('close-tabla');

btnCloseTabla.addEventListener('click', ()=>{
    document.getElementById('tabla').classList.remove('d-block');
})

let btnOpenEdit = document.getElementById('btn-open-edit-precio');
btnOpenEdit.addEventListener('click', ()=>{
    document.getElementById('form-edit-precio').classList.add('d-flex');
})

let btnCloseEdit = document.getElementById('btn-close-edit-precio');
btnCloseEdit.addEventListener('click', ()=>{
    document.getElementById('form-edit-precio').classList.remove('d-flex');
})

// localStorage.setItem('costo-luz','130');

let precioEnMemoria = Number(sessionStorage.getItem('costo-luz'))

function cargarDatos() {
    document.getElementById('input-precio').setAttribute('value',precioEnMemoria); 
}

document.getElementById('btn-save-edit-precio').addEventListener('click',guardarDato);

function guardarDato(){
    let nuevoPrecio = document.getElementById('input-precio').getAttribute('value');
    sessionStorage.setItem('costo-luz',nuevoPrecio);
    document.getElementById('form-edit-precio').classList.remove('d-flex');
}
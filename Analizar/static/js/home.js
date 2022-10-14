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
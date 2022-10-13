let links = document.querySelectorAll('.link-tabla-datos');

for(let i = 0; i < links.length; i++){
    links[i].addEventListener('click',()=>{
        links.forEach(el => el.classList.remove('link-tabla-datos-activo'))
        links[i].classList.add('link-tabla-datos-activo')
    })
}
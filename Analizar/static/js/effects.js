//Cuando se presione sobre el icono del menu despliega un menu
isClosed = false;
menuLateral.addEventListener('click',() => {
    hambugerChange();
});
hambugerChange = () => {
    // Si esta cerrado el menu, saco el icono del menu hamburgesa y despliego el menu
    if (isClosed == true) {          
        changeIcon.classList.remove('bi', 'bi-list');
        changeIcon.classList.add('bi', 'bi-x-lg');
        console.log('Abro menu');
        isClosed = false;
        // Si esta abierto el menu, saco el icono de la cruz y cierro el menu
      } else {   
        changeIcon.classList.remove('bi', 'bi-x-lg');
        changeIcon.classList.add('bi', 'bi-list');
        console.log('Cierro menu');
        isClosed = true;
      }
};

//Ojito contraseña
const buttonPass = document.querySelector('#showPass');
buttonPass.addEventListener('click', () => {
    const inputPassword = document.querySelector('#pass')
    if (inputPassword.type === 'password') {
        inputPassword.type = 'text';    
        showPass.classList.remove('bi', 'bi-eye');      
        showPass.classList.add('bi', 'bi-eye-slash');    
    }else{
        inputPassword.type = 'password';
        showPass.classList.remove('bi', 'bi-eye-slash'); 
        showPass.classList.add('bi', 'bi-eye');   
    }
});
// Campos a validar
const username = document.querySelector('#username');
const password = document.querySelector('#pass');
const form = document.querySelector('form');
var validar = 'si';
// Validar username
validarUser = () => {
if(username.value == ''){
    username.focus();
    alert('Ingrese un usuario valido');
    validar = 'no';
}
if (validar == 'no'){
    return false;
}else{
    return true;
}
};
// Validar password
validarPass = () => {
if(password.value == ''){
    password.focus();
    alert('La contraseña es incorrecta');
    validar = 'no';
}
if (validar == 'no'){
    return false;
}else{
    return true;
}
};


form.addEventListener("submit", (e) => {
    e.preventDefault(); //impidiendo el envío de formularios
    validarUser();
    validarPass();
    if (validar == 'si') {
        location.href = form.getAttribute("action");
    }else{
        location.href = 'http://127.0.0.1:5500/Analizar/frontend/view/loginAdmin.html';
    }
});
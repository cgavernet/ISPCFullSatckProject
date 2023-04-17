function cambiarTitulo() {
    const titulo1 = document.getElementById('titulo-principal')
    titulo1.innerHTML = "AnalizAR, control total de tus consumos electricos a un click de distancia"
}

function restaurarTitulo() {
    const titulo2 = document.getElementById('titulo-principal')
    titulo2.innerHTML = "<strong>Controlar el consumo eléctrico nunca fue tan fácil</strong>"
} 

function cambiarImagen() {
    const imagen1 = document.getElementById('imagen-principal')
    imagen1.src = "../static/img/analizarSinBg.png"
}

function restaurarImagen() {
    const imagen2 = document.getElementById('imagen-principal')
    imagen2.src = "../static/img/fondo1b.png"
}

function cambiarImagenServicios() {
    const imagenServicios1 = document.getElementById('imagen-servicios')
    imagenServicios1.src = "../static/img/DevFullSolutionsb.png"
}

function restaurarImagenServicios() {
    const imagenServicios2 = document.getElementById('imagen-servicios')
    imagenServicios2.src = "../static/img/fondo2b.png"
}

// Inicio de la modificación del 12 de noviembre de 2022
// Guardo en constantes la información del formulario

const $formulario = document.getElementById("formulario");
const $inputs = document.querySelectorAll("#formulario input")

// Expresiones regulares utilizadas
const expresiones = {
// El campo aceptará letras con o sin acentos y espacios
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
// El campo aceptará cualquier caracter menos los especiales
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
// El campo aceptará minimamente la cantidad de caracteres del servicio "X"
    mensaje: /^[,.¿?¡!()a-zA-ZÀ-ÿ\s]{3,200}$/,
}

// Objeto con los campos del formulario
const campos = {
    nombre: false,    
    correo: false,
    mensaje: false
}

// Utilizo switch para seleccionar el imput donde hace foco el usuario
const validarFormulario = (e) => {
    switch(e.target.name) {        
        case "nombre":
            validarCampo(expresiones.nombre, e.target, "nombre");
        break;        
        case "correo":
            validarCampo(expresiones.correo, e.target, "correo");
        break;
        case "mensaje":
            validarCampo(expresiones.mensaje, e.target, "mensaje");
        break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)){        
        document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-incorrecto");
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-correcto");
        document.querySelector(`#grupo__${campo} i`).classList.remove("fa-times-circle");
        document.querySelector(`#grupo__${campo} i`).classList.add("fa-check-circle");
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove("formulario__input-error-activo");
        campos[campo] = true;
        console.log("Funciona");
    } else {
           document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-incorrecto");
           document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-correcto");
           document.querySelector(`#grupo__${campo} i`).classList.add("fa-times-circle");
           document.querySelector(`#grupo__${campo} i`).classList.remove("fa-check-circle");
           document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add("formulario__input-error-activo");
           campos[campo] = false;
           console.log("Funciona");
        }
}

// Valido cada evento del usuario sobre el formulario
// Analizo los eventos "keyup" y "blur"
$inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
})

// Valido todo el formulario 
$formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const $terminos = document.getElementById("terminos");
    if(campos.nombre && campos.correo && campos.mensaje && $terminos.checked) {
        // formulario.reset();
        document.getElementById("formulario__mensaje-exito").classList.add("formulario__mensaje-exito-activo");
        setTimeout(() => {
            document.getElementById("formulario__mensaje-exito").classList.remove("formulario__mensaje-exito-activo");
            document.getElementById("formulario__grupo-terminos").style.display = "none";            
        }, 3000);        
        document.querySelectorAll(".formulario__grupo--correcto").forEach ((icono) => {
            icono.classList.remove("formulario__grupo--correcto");
        });        
        setTimeout(() => {
            location.reload();
        }, 5000);
    } else {
        document.getElementById("formulario__mensaje").classList.add("formulario__mensaje-activo");
    }
})

// Fin de la modificación del 12 de noviembre de 2022
window.addEventListener('load', () => {
    const formulario = document.getElementById('formulario');
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');

    formulario.addEventListener("submit", (e) => {
        e.preventDefault()
        validarCampos()
    })

    const validarCampos = () => {
        // Capturo los valores ingresados por el usuario
        const nombreValor = nombre.value.trim()
        const emailValor = email.value.trim()
        const mensajeValor = mensaje.value.trim()

        // Valido el Nombre ingresado
        // Utilizo ! para validar si el campo está vacío
        if(!nombreValor){            
            validacionFallida(nombre, 'Debe completar el campo nombre')
        }else{
            validacionCorrecta(nombre)            
        }

        // Valido el E-mail ingresado
        if(!emailValor){            
            validacionFallida(email, 'Debe completar el campo E-mail')
        }else if(!validaEmail(emailValor)) {
            validacionFallida(email, 'El E-mail ingresado es incorrecto')
        }else {
            validacionCorrecta(email)            
        }
        
        // Valido el Mensaje ingresado
        if(!mensajeValor){            
            validacionFallida(mensaje, 'Debe completar el campo Mensaje')
        }else{
            validacionCorrecta(mensaje)            
        }
    }

    // Defino la función de validación fallida
    const validacionFallida = (input, mensaje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = mensaje

        // Clase en CSS para dar estilo al mensaje y al campo
        formControl.className = 'form-control-fallida'
    }

    // Defino la función de validación correcta
    const validacionCorrecta = (input, mensaje) => {
        const formControl = input.parentElement
        
        // Clase en CSS para dar estilo al mensaje y al campo
        formControl.className = 'form-control-correcta'
    }
    
    // Valido el E-mail ingresado según el siguiente patrón
    const validaEmail = (email) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    }

})

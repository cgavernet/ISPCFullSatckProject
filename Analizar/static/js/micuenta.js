function validarCampos() {
    let nombre, apellido, telefonoMovil, direccion, email, contraseñaActual, contraseñaNueva;
    nombre= document.getElementById("nombre").value;
    apellido= document.getElementById("apellido").value;
    telefonoMovil= document.getElementById("telefonoMovil").value;
    direccion= document.getElementById("direccion").value;
    email= document.getElementById("email").value;
    contraseñaActual= document.getElementById("contraseñaActual").value;
    contraseñaNueva= document.getElementById("contraseñaNueva").value;

    if (nombre ===""){
        alert("El campo nombre no puede estar vacio");
          return false;
    }else if(apellido===""){
        alert ("El campo apellido no puede estar vacio"); 
          return false;
    }else if (telefonoMovil===""){
        alert("El campo telefono movil no puede estar vacio");
          return false;
    }else if (direccion===""){
        alert ("El campo direccion no puede estar vacio");
          return false;
    }else if(email===""){
        alert("El campo email no puede estar vacio");
          return false;
    }else if (contraseñaActual ===""){
        alert("El campo contraseña actual no puede estar vacio");
          return false;
    }else if (contraseñaNueva=== ""){
        alert("El campo contraseña nueva no puede estar vacio");
          return false;
    }
}

function volverHome(){
  window.location.href= "../../../Analizar/view/home.html"
}
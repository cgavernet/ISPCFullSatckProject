function validarCampos() {
    var nombre, apellido, telefonoMovil, direccion, email, contraseñaActual, contraseñaNueva;
    nombre= document.getElementById("nombre").value;
    apellido= document.getElementById("apellido").value;
    telefono movil= document.getElementById("telefono movil").value;
    direccion= document.getElementById("direccion").value;
    email= document.getElementById("email").value;
    contraseña actual= document.getElementById("pass").value;
    contraseña nueva= document.getElementById("passNew").value;

    if (nombre ==""){
        alert("El campo nombre no puede estar vacio");
          return false;
    }
    if (apellido==""){
        alert ("El campo apellido no puede estar vacio"); 
          return false;
    }
    if (telefono movil==""){
        alert("El campo telefono movil no puede estar vacio");
          return false;
    }
    if (direccion==""){
        alert ("El campo direccion no puede estar vacio");
          return false;
    }
    if(email==""){
        alert("El campo email no puede estar vacio");
          return false;
    }
    if (contraseña actual ==""){
        alert("El campo contraseña actual no puede estar vacio");
          return false;
    }
    if (contraseña nueva== ""){
        alert("El campo contraseña nueva no puede estar vacio");
          return false;
    }
}
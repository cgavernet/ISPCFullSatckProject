function validar(){
    let nombre, apellido, correo, telefono, contraseña, confirmacionContraseña;
    nombre = document.getElementById("name").value;
    apellido = document.getElementById("apellido").value;
    correo = document.getElementById("email").value;
    telefono = document.getElementById("telefono").value;
    contraseña = document.getElementById("pass").value;
    confirmacionContraseña = document.getElementById("passConfirm").value;
  
    let expresion = /\w+@\w+\.[a-z]/;

    if(nombre === "" || apellido === "" || correo === "" || telefono === "" || contraseña === "" || confirmacionContraseña === ""){
        alert("Complete los campos correctamente.");
        return false;
    }else{
        if(nombre.length > 30){
            alert("El nombre es muy largo.");
            return false;
        } else if(apellido.length > 30){
            alert("El apellido es muy largo.");
            return false;
        }else if(correo.length > 30){
            alert("El correo es muy largo.");
            return false;
        }else if(expresion.test(correo) !== true){
            alert("El correo no es válido.");
            return false;
        }else if(contraseña.length>30 || contraseña.length<7){
            alert("La contraseña debe tener entre 8 y 29 caracteres.");
            return false;
        }else if(contraseña !== confirmacionContraseña){
            alert("Las contraseñas no coinciden.");
            return false;
        }else{
            alert("Usted ha sido registrado con éxito!")
            return true;
        }
    }
}
  
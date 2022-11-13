const container = document.querySelector(".container")
  const form = document.querySelector("form"),
  emailField = form.querySelector(".email-field"),
  emailInput = emailField.querySelector(".email"),
  cPassField = form.querySelector(".confirm-password"),
  cPassInput = cPassField.querySelector(".cPassword"),
  pwShowHide = document.querySelectorAll(".showHidePw"),
  pwFields = document.querySelectorAll(".password"),
  signUp = document.querySelector(".signup-link"),
  login = document.querySelector(".login-link");

// js codigo para que aparezca el formulario de reestablecer contraseña
signUp.addEventListener("click", ( )=>{
  container.classList.add("active");
});

login.addEventListener("click", ( )=>{
  container.classList.remove("active");
});

// Validación de e-mail
function checkEmail() {
  const emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emaiPattern)) {
    return emailField.classList.add("invalid"); //agrego una clase no válida si el valor del correo electrónico no coincide con el patrón de correo electrónico
  }
  emailField.classList.remove("invalid"); //elimino una clase no válida si el valor del correo electrónico coincide con emaiPattern
}

// js codigo para mostrar/ocultar contraseña y el icono
const eyeIcons = document.querySelectorAll(".show-hide");

eyeIcons.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    const pInput = eyeIcon.parentElement.querySelector("input"); //para obtener el elemento principal del ícono del ojo y seleccionar la entrada de contraseña
    if (pInput.type === "password") {
      eyeIcon.classList.replace("bx-hide", "bx-show");
      return (pInput.type = "text");
    }
    eyeIcon.classList.replace("bx-show", "bx-hide");
    pInput.type = "password";
  });
});



//Confirmar Password Validación
function confirmPass() {
  if (cPassInput.value === "") {
    return cPassField.classList.add("invalid");
  }
  cPassField.classList.remove("invalid");
}

// Función de llamada en el formulario Sumbit
form.addEventListener("submit", (e) => {
  e.preventDefault(); //impidiendo el envío de formularios
  checkEmail();
  confirmPass();

  //función de llamada en tecla arriba
  emailInput.addEventListener("keyup", checkEmail);
  cPassInput.addEventListener("keyup", confirmPass);

  if (
    !emailField.classList.contains("invalid") &&
    !cPassField.classList.contains("invalid")
  ) {
    location.href = form.getAttribute("action");
  }
});


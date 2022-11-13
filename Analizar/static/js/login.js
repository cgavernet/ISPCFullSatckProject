const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

      // js codigo para mostrar/ocultar contraseña y el icono
      pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye"); 
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash"); 
                    })
                }
            })
        })
      })

    // js codigo para que aparezca el formulario de reestablecer contraseña
      signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
      });

      login.addEventListener("click", ( )=>{
        container.classList.remove("active");
      });
    
    // js codigo para validar formulario de Login
    const form = document.querySelector("form"),
          emailField = form.querySelector(".email-field"),
          emailInput = emailField.querySelector(".email"),
          passField = form.querySelector(".password-field"),
          passInput = passField.querySelector(".password");
    
    // Validacion de email
    function checkEmail() {
      const pattern =  /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
      if (!emailInput.value.match(emailPattern)) {
        return emailField.classList.add("invalid"); //Agrego clase invalida si el valor no coincide
      }
      emailField.classList.remove("invalid");
    }

     // Validacion de Pass
     function confirmPass() {
      const pattern =  /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
      if (!passInput.value.match(passPattern)) {
        return passField.classList.add("invalid"); //Agrego clase invalida si el valor no coincide
      }
      passField.classList.remove("invalid");
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      checkEmail();
    

    emailInput.addEventListener("keyup", checkEmail);
    passInput.addEventListener("keyup", confirmPass);
    
    if(
      !emailField.classList.contains("invalid")&&
      !passField.classList.contains("invalid")
      ) {
      location.href = form.getAttribute("inicio")
      
      }
  })
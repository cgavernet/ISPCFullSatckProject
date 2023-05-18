import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, FormControl, Validators, AbstractControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginDash!: FormGroup;
  resetFormPass!: FormGroup;
  //isLoggedIn!: boolean;
  loginError: string = '';

  constructor( private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  email: string = '';
  password: string = '';
  
  ngOnInit(): void {
    this.loginDash = this.initForm();
    this.resetFormPass = this.resetForm();  
  }
  //Capturo los valores cuando le doy a ingresar
  onSubmit(): void{    
        if(this.loginDash.valid){
      this.authService.login(this.loginDash.value.email, this.loginDash.value.password).subscribe(  
        (users: any[]) => {
          const matchingUser = users.find(user => user.email == this.loginDash.value.email && user.password == this.loginDash.value.password);          
          if (matchingUser) {
            // Autenticación exitosa
            localStorage.setItem('currentUser', JSON.stringify({ email: this.email }));
            this.router.navigate(['/dashboard-client']);
          } else {
            // Datos de autenticación incorrectos
            this.loginError = 'Usuario o contraseña incorrectos';
            this.router.navigate(['/login']);
            this.loginDash.reset();
          }
        },
        (error) => {
          // Manejar el error en caso de fallo en la petición
          this.loginError = 'Lo siento hubo un fallo inesperado';
          console.error(error)
        });
    }else{
      this.loginDash.markAllAsTouched();
      this.loginError = 'Complete los campos';
    }    
  }
  //Validaciones para los campos
  initForm(): FormGroup {
    return this.fb.group({
      email: ['', [ Validators.required, Validators.email, Validators.pattern('^[^ ]+@[^ ]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }
  // Resetear password
  resetPass(): void{
    const container = document.querySelector('.container')!;
    const formReset = document.getElementById('formReset');
    if (formReset != null) {
      container.classList.add('active');
    }
  }
  formLogin(): void{
    const container = document.querySelector('.container')!;
    container.classList.remove('active');    
  }
  resetForm(): FormGroup {
    return this.fb.group({
      email: ['', [ Validators.required, Validators.email, Validators.pattern('^[^ ]+@[^ ]+\.[a-z]{2,3}$')]]
    })
  }
  onResetPass(): void{
    const email = this.resetFormPass.value.email;
    console.log('Form ->', this.resetFormPass.value);
  }
}

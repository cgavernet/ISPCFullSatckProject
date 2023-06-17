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
  show: boolean = false;

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
          //console.log(this.loginDash.value.email, this.loginDash.value.password);        
      this.authService.login(this.loginDash.value.email, this.loginDash.value.password).subscribe(  
        response => {          
            // Autenticación exitosa   
            console.log(response);         
            this.authService.setIsAdmin(response.is_admin);
            localStorage.setItem('userId', response?.userId)                    
            localStorage.setItem('currentUser', JSON.stringify({ email: this.email }));
            if(response.is_admin == true) {
              this.router.navigate(['/dashboard-admin']);
            }else{
              this.router.navigate(['/dashboard-client']);
            }
        },
        (error) => {
          // Manejar el error en caso de fallo en la petición
          this.loginError = 'Usuario o contraseña incorrectos';
            //this.router.navigate(['/login']);
            //this.loginDash.reset();
          this.loginError = 'Credenciales inválidas';
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
  showPass(){
    this.show = !this.show;
  }   


}

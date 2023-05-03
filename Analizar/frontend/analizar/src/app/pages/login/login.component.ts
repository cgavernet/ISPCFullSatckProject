import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, FormControl, Validators, AbstractControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login!: FormGroup;
  resetFormPass!: FormGroup;
  estaLogueado!: boolean;
  constructor( private fb: FormBuilder, private router: Router) { }
  
  ngOnInit(): void {
    this.login = this.initForm();
    this.resetFormPass = this.resetForm()
    
  }
  //Capturo los valores cuando le doy a ingresar
  onSubmit(): void{
    const email = this.login.value.email;
    const pass = this.login.value.password;
    console.log('Form ->', this.login.value);
    if(email == "admin@analizar.tk" || pass == "123456789"){
      this.estaLogueado = true;
      this.router.navigate(['/dashboard']);
    }else{
      this.estaLogueado = false;
      this.router.navigate(['/']);
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

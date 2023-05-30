import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroService } from 'src/app/service/registro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroForm!: FormGroup;
  linkLogin() {
    return this.router.navigate(['/login'])
  }
  linkHome() {
    return this.router.navigate(['/inicio'])
  }

  constructor(private fb:FormBuilder, private router: Router, private registerService: RegistroService){}
  loginError: string = '';

  ngOnInit(): void{
    this.registroForm = this.initForm();
  }

  initForm(): FormGroup{
    return this.fb.group({
      nombre: ['', [ Validators.required]],
      apellido: ['', [ Validators.required]],
      email: ['', [ Validators.required, Validators.email, Validators.pattern('^[^ ]+@[^ ]+\.[a-z]{2,3}$')]],
      telefono: ['', [ Validators.required, Validators.pattern('[0-9]{10}')]],
      password: ['', [ Validators.required, Validators.minLength(7), Validators.maxLength(30)]],
      confirmPassword: ['', [ Validators.required, Validators.minLength(7), Validators.maxLength(30)]],
    })
  }

  onSubmit(){
    const nombre = this.registroForm.value.nombre;
    const apellido = this.registroForm.value.apellido;
    const email = this.registroForm.value.email;
    const celular = this.registroForm.value.telefono;
    const password  = this.registroForm.value.password;
    //console.log(nombre, apellido, email, telefono, password);
    if(this.registroForm.valid){
      this.registerService.addUsers(nombre, apellido, email, celular, password).subscribe((user: any) => {
        console.log('User creado con exito: ', user);
        this.router.navigate(['/dashboard-client']);
      }, (error: any) => {
        console.error('Hubo un error al agregar el registro', error);
      })
    }else{
      this.registroForm.markAllAsTouched();
      this.loginError = 'Complete correctamente los campos'
      console.log('Opps algo fallo');
      
    }
    
  }

  passwordMatch(): boolean{
    if(this.registroForm.value.password === this.registroForm.value.confirmPassword){
      return true
    }else{
      return false
    }
  }
}

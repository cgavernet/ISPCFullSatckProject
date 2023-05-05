import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroForm!: FormGroup;

  constructor(private fb:FormBuilder, private router: Router){}
 
  ngOnInit(): void{
    this.registroForm = this.initForm();
  }

  initForm(): FormGroup{
    return this.fb.group({
      nombre: ['', [ Validators.required]],
      apellido: ['', [ Validators.required]],
      email: ['', [ Validators.required, Validators.email, Validators.pattern('^[^ ]+@[^ ]+\.[a-z]{2,3}$')]],
      telefono: ['', [ Validators.required, Validators.pattern('[0-9]{0,3} [0-9]{3,4} [0-9]{6,7}')]],
      password: ['', [ Validators.required, Validators.minLength(7), Validators.maxLength(30)]],
      confirmPassword: ['', [ Validators.required, Validators.minLength(7), Validators.maxLength(30)]],
    })
  }

  onSubmit(): void{
    if(!this.registroForm.invalid){
        Swal.fire({
          icon: 'success',
          title: 'Éxito!',
          text: 'Registro completo!'
        })
        .then(() => this.router.navigate(['/login']))
    }
  }

  passwordMatch(): boolean{
    if(this.registroForm.value.password === this.registroForm.value.confirmPassword){
      alert('Coincidencia')
      return true
    }else{
      alert('no hay coincidencia')
      return false
    }
  }
}

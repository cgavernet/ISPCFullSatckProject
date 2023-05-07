import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title1: string = 'AnalizAR, control total de tus consumos electricos a un click de distancia';
  title2: string = '<strong>Controlar el consumo eléctrico nunca fue tan fácil</strong>';

  constructor( private fb: FormBuilder, private router: Router) {}
  nombreApellido: string = '';
  email: string = '';
  mensaje: string = '';
  formContact!: FormGroup;
  ngOnInit(): void {
    this.formContact = this.contactForm();    
  }
  onSubmit(): void{
    alert('Mensaje enviado correctamente');
  }
  //Validaciones form contact
  contactForm(): FormGroup {
    return this.fb.group({
      email: ['', [ Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$')]],
      nombreApellido: ['', [Validators.required, Validators.pattern('^[a-zA-ZÀ-ÿ\s]{3,40}$')]],
      mensaje: ['', [ Validators.required, Validators.email, Validators.pattern('^[,.¿?¡!()a-zA-ZÀ-ÿ\s]{3,200}$')]],
    })
  }
  // Efectos de titulos y imagenes
  cambiarTitulo() {
    const titulo1 = document.getElementById('titulo-principal');
    if (titulo1 !== null) {
      titulo1.innerHTML = this.title1;
    }
  }
  restaurarTitulo() {
    const titulo2 = document.getElementById('titulo-principal');
    if (titulo2 !== null) {
      titulo2.innerHTML = this.title2
    }
} 
cambiarImagen() {
    const imagen1 = document.getElementById('imagen-principal')
    imagen1?.setAttribute('src', '../assets/img/analizarSinBg.png');
}

restaurarImagen() {
    const imagen2 = document.getElementById('imagen-principal')
    imagen2?.setAttribute('src',"../assets/img/fondo1b.png")
}

cambiarImagenServicios() {
    const imagenServicios1 = document.getElementById('imagen-servicios')
    imagenServicios1?.setAttribute('src',"../assets/img/DevFullSolutionsb.png")
}

restaurarImagenServicios() {
    const imagenServicios2 = document.getElementById('imagen-servicios')
    imagenServicios2?.setAttribute('src',"../assets/img/fondo2b.png")
}

}


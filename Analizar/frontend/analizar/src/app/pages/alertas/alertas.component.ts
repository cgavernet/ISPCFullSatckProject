import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertasService } from 'src/app/service/alertas.service';
import { Alert } from './Alert';


@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit {

constructor(private router: Router, private alertaService: AlertasService, private fb: FormBuilder) {}
 alerts: Alert[] = [];
 valor!: number;
 medidor!: string;
 fechaAlta!: Date;
 alertas: any[] = [];
 alertasForm!: FormGroup;
 loginError: string = '';
 
 ngOnInit(): void{
  this.alertasForm = this.initForm()
  this.alertaService.getAlertas().subscribe((data: any) => {
    this.alertas = data   
  })
  
 }
   //Validaciones para los campos
   

 saveAlert(){
  const valor = this.valor; 
  const typeAlert = this.medidor;
  if(this.alertasForm.valid){
  this.alertaService.addAlertas(valor, typeAlert).subscribe((alert: any) => {
    console.log('Alerta agregada con éxito:', alert);
    this.closeModal();
  }, (error: any) => {
    console.error('Hubo un error al agregar la alerta', error);
  })
  }else{
    this.alertasForm.markAllAsTouched();
    this.loginError = 'Complete los campos';
  }
  /*
  if(this.setAlert && this.typeAlert){
    let alert = new Alert();
    console.log(alert.setAlert);
    alert.setAlert = this.setAlert;
    alert.typeAlert = this.typeAlert;
    console.log(this.setAlert);
    console.log(this.typeAlert);  
    this.alerts.push(alert);
    this.setAlert = 0;
    this.typeAlert = '';
    this.closeModal();
  }else{
    alert("Ingrese una alerta");
  }*/

 }
 updateAlert(){}
 removeAlert(id:number){
  this.alerts = this.alerts.filter((v, i) => i !== id);
 }

  //Abrir modal
  openModal(): void{
    const modal = document.getElementById('addAlert');
    let contenedorAlertas = document.getElementById('contenedor-alertas');
    if(modal != null) {
      modal.style.display ='flex';      
    }
    if(contenedorAlertas != null) {
      contenedorAlertas.style.display ='none';
    }
  }
  //Abrir modal editar
  openEditModal(id:number): void{
    const editModal = document.getElementById('editAlert');
    let contenedorAlertas = document.getElementById('contenedor-alertas');
    if(editModal != null) {
      editModal.style.display ='flex';      
    }
    if(contenedorAlertas != null) {
      contenedorAlertas.style.display ='none';
    }
  }
  //Cerrar modal
  closeModal(){
    const modal = document.getElementById('addAlert');
    let contenedorAlertas = document.getElementById('contenedor-alertas');
    if(modal != null) {
      modal.style.display ='none';
    }
    if(contenedorAlertas != null) {
      contenedorAlertas.style.display ='grid';
    }
  }
  initForm(): FormGroup {
    return this.fb.group({
      valor: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      medidor: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    })
  }

}

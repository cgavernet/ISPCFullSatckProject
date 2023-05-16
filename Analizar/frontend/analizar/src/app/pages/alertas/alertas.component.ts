import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Alert } from './Alert';


@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent {

constructor(private router: Router) {}
 alerts: Alert[] = [];
 setAlert!: number;
 typeAlert!: string;

 saveAlert(){
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
  }

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

}

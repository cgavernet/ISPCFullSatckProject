import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AlertasService } from 'src/app/service/alertas.service';

@Component({
  selector: 'app-edit-alerta',
  templateUrl: './edit-alerta.component.html',
  styleUrls: ['./edit-alerta.component.css']
})
export class EditAlertaComponent implements OnInit {
  constructor(private rutaEdit: ActivatedRoute, private fb: FormBuilder, private alertaService: AlertasService, private router: Router) {}
  alertaId!: number;
  alerta: any;
  editForm!: FormGroup;
  registroSeleccionado: any;
  loginError: string = '';
  
  ngOnInit(): void {
    this.rutaEdit.params.subscribe(
      (params: Params) => {
        this.alertaId = params['id'];
        console.log(this.alertaId, params['id']);                
      })
      this.getAlerta();
      console.log(this.getAlerta());
      
  }  

  initForm(): FormGroup {
    return this.fb.group({
      valor: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      medidor: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      fechaAlta: [''],
    })
  }
  getAlerta() {
    const idParam = this.rutaEdit.snapshot.paramMap.get('id');
    this.alertaId = idParam ? +idParam : 0;
    this.editForm = this.initForm()
    // Obtener los datos de la alerta y establecerlos en el formulario
    this.alertaService.getAlertaById(this.alertaId).subscribe(
      (data) => {
        this.editForm.patchValue({
          valor: data.valor,
          medidor: data.medidor,
          fecha: data.fecha
        });
        //console.log(data.fecha);
        
      },
      (error) => {
        console.log(error);
      }
    );
    /*
    // Realiza una petición a la API para obtener los datos del registro con this.registroId
    const id = this.rutaEdit.snapshot.paramMap.get('id');
    this.alertaService.getAlertaById(this.id).subscribe((data: any) => {
      this.alerta = data;
    });   */
  }
  updateAlert(){
    //const id = this.
    const valor = this.editForm.value.valor;
    const medidor = this.editForm.value.medidor;
    const fechaAlta = this.editForm.get('fechaAlta')?.value;
    if(this.editForm.valid){
    this.alertaService.updateAlertas(this.alertaId,valor, medidor, fechaAlta).subscribe((alert) => {
      console.log('Alerta editada con éxito:', alert);
      this.router.navigate(['/alertas']);
    },(error: any) => {
      //console.error('Hubo un error al agregar la alerta', error);
      if (error.error && error.error.alertaNoExiste == false) {
        this.loginError = 'El medidor no existe lo siento';
      } else {
        this.loginError = 'Lo siento ocurrio un error al editar la alerta, revise que los campos esten completos';
      }
    })
   }else{
    this.editForm.markAllAsTouched();
    this.loginError = 'Complete los campos';
    console.log('Fallo!!');    
  }
}
}

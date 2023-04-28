import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { Pagina404Component } from './pagina404/pagina404.component';
import { AlertasComponent } from './alertas/alertas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    //Aca deben declarar los componentes de pages que crearon
    Pagina404Component,
    AlertasComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    //Aca deben exportar los componentes de pages creados, para ser utilizados por otros modulos
    Pagina404Component,
    AlertasComponent
  ]
})
export class PagesModule { }

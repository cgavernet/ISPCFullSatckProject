import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { Pagina404Component } from './pagina404/pagina404.component';


@NgModule({
  declarations: [
    //Aca deben declarar los componentes de pages que crearon
  
    Pagina404Component
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    //Aca deben exportar los componentes de pages creados, para ser utilizados por otros modulos
    Pagina404Component
  ]
})
export class PagesModule { }

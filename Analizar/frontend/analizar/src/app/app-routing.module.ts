import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertasComponent } from './pages/alertas/alertas.component';
import { Pagina404Component } from './pages/pagina404/pagina404.component';

const routes: Routes = [
  //Definir las rutas de la app
  { path: 'alertas', component: AlertasComponent},
  { path: '**', component: Pagina404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

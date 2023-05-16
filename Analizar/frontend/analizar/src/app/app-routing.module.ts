import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertasComponent } from './pages/alertas/alertas.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { PlanesComponent } from './pages/planes/planes.component';
import { LoginComponent } from './pages/login/login.component';
import { Pagina404Component } from './pages/pagina404/pagina404.component';
import { DashboardClienteComponent } from './pages/dashboard-cliente/dashboard-cliente.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { AuthGuard } from './service/authGuard.service';
import { RegistroComponent } from './pages/registro/registro.component';
import { MiCuentaComponent } from './pages/mi-cuenta/mi-cuenta.component';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  //Definir las rutas de la app
  { path: 'alertas', component: AlertasComponent, canActivate:[AuthGuard]},
  { path: 'home', component: HomeComponent},
  {path: '', redirectTo:'/home', pathMatch:'full'},
  { path: 'productos', component: ProductosComponent},
  { path: 'planes', component: PlanesComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'carrito', component: CarritoComponent, canActivate:[AuthGuard]},
  { path: 'historial', component: HistorialComponent, canActivate:[AuthGuard]},
  { path: 'dashboard-client', component: DashboardClienteComponent, canActivate:[AuthGuard]},
  { path: 'dashboard-admin', component: DashboardAdminComponent, canActivate:[AuthGuard]},
  { path: 'mi-cuenta', component: MiCuentaComponent, canActivate:[AuthGuard]},
  { path: '**', component: Pagina404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

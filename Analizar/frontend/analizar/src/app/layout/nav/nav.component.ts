import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  
  constructor(private router: Router, private authService: AuthService ) { }
  isLoggedIn(): boolean {
    // console.log(this.authService.isLoggedIn);    
    return this.authService.isLoggedIn();
  }
  
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  isClosed: boolean = true;
  openSidebar() {
    const submenu = document.querySelector('#submenu');
    const footer = document.querySelector('footer');
    const changeIcon = document.querySelector('#changeIcon');
    if (this.isClosed === true) {          
      changeIcon?.classList.remove('bi', 'bi-list');
      changeIcon?.classList.add('bi', 'bi-x-lg');
      submenu?.classList.add('sidebar-activo');
      console.log('Abro menu');
      this.isClosed = false;
      // Si esta abierto el menu, saco el icono de la cruz y cierro el menu
    } else {   
      changeIcon?.classList.remove('bi', 'bi-x-lg');
      changeIcon?.classList.add('bi', 'bi-list');
      submenu?.classList.remove('sidebar-activo');
      console.log('Cierro menu');
      this.isClosed = true;
    }
  }

}

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
    console.log(this.authService.isLoggedIn);    
    return this.authService.isLoggedIn();
  }
  
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}

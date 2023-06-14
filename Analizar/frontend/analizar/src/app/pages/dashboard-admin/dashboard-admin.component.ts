import { Component, OnInit } from '@angular/core';
import { RegistroService } from 'src/app/service/registro.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  constructor(private userService: RegistroService) {}

  users: any[] = [];
  ngOnInit(): void {
    this.getUsers()
  }
  getUsers(){
    this.userService.getUsers().subscribe((data: any) =>{
      this.users = data      
    })
  }
}

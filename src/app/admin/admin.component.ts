import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  admins: any = [];

  adminName: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAdmins().subscribe(data => {
      this.admins = data;
    });
  }


  updateAdminName() {
    console.log('Admin name updated:', this.adminName);
  }
}

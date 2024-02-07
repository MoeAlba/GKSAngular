import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any = [];


  userName: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  // Add the updateUserName method
  updateUserName() {
    // Logic to update user name
    console.log('User name updated:', this.userName);
  }
}

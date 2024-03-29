import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'GKSSampleApp';

  admins: any = [];

  adminName: string = '';

  
  constructor(private apiService: ApiService) { }


  ngOnInit(): void {
    this.apiService.getAdmins().subscribe(data => {
      debugger;
      this.admins = data;
    });
  }
}



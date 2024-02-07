import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiURL = 'https://localhost:44366/';

  constructor(private http: HttpClient) { }

//Retrieves user by id

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL + '/user');
  }



  getAdmins(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL + '/admin');
  }

  createUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiURL + '/user', user);
  }

  createAdmin(admin: any): Observable<any> {
    return this.http.post<any>(this.apiURL + '/admin', admin);
  }

  updateUser(user: any): Observable<any> {
    return this.http.put<any>(this.apiURL + '/user', user);
  }

  updateAdmin(admin: any): Observable<any> {
    return this.http.put<any>(this.apiURL + '/admin', admin);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(this.apiURL + '/user/' + id);
  }

  deleteAdmin(id: number): Observable<any> {
    return this.http.delete<any>(this.apiURL + '/admin/' + id);
  }


}

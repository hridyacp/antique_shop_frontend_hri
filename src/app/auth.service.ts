import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //server_address:String = 'http://localhost:5200';
  server_address:String = '/api';
  constructor(private http:HttpClient) { }
  login(user:any){
    return this.http.post<any>(`${this.server_address}/login`,user)
  }
  loggedIn(){
    return !!sessionStorage.getItem('token')
  }
  getToken(){
    return sessionStorage.getItem('token')
  }
  getRole(){
    return !!sessionStorage.getItem('role')
  }
  getAdRole(){
    return !!sessionStorage.getItem('admn')
  }
}

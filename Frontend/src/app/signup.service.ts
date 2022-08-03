import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  // server_address = "http://localhost:3000";
  server_address:string = "api";

  userlist = {
    First_Name : '',
    Last_Name: '',
    email: '',
    password: ''
  }
  constructor(private http:HttpClient) { }
  getUser(id:any){
    return this.http.get(`${this.server_address}/`+id);
  }
  newUser(userlist:any)
  {   
    return this.http.post(`${this.server_address}/insertUser`,{"user":userlist})
    .subscribe(data =>{console.log(data)})
  }
}

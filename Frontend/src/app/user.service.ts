import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  server_address:string = "api";
  item= {
    First_Name:'',
    Last_Name:'',
    email:'',
    password:''
    }
  constructor(private http:HttpClient) { }
  getUser(id:any){
    return this.http.get(`${this.server_address}/`+id);
  }
  getusers(){
    return this.http.get(`${this.server_address}/users`);
  }
  
}

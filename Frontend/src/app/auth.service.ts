import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  server_address:string = "api";
loginUser(user:any)  
// above user coming from frontend input
{
  return this.http.post<any>(`${this.server_address}/login`,user)  
} 
constructor(private http:HttpClient) { }
}

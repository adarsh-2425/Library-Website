import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private newUserService: SignupService,private router: Router) { }



  ngOnInit(): void {
  }

 addUser={
    First_Name:'',
    Last_Name:'',
    email:'',
    password:''};
    
    signup(){
      this.newUserService.newUser(this.addUser);
    console.log("Called");    
    // alert("Success");
    this.router.navigate(['/login']);
    }
}

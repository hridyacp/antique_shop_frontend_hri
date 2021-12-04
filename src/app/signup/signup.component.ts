import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AntiqueService } from '../antique.service';
import { SignupModel } from './SignUpModel';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  title:String = "Sign Up";
  showPassword :boolean =false;
  showConfirmPassword :boolean =false;
  signupForm:any
  error:any
  constructor(private antiqueService:AntiqueService, private router:Router) { }
  signupItem = new SignupModel(null,null,null,null,null)
  ngOnInit(): void {
  }
  password_show_hide(){
    this.showPassword = !this.showPassword; 
  }
  password_show_hide1(){
    this.showConfirmPassword = !this.showConfirmPassword;  
  }
  signUp(){
    this.antiqueService.signup(this.signupItem)
    .subscribe(
      (res)=>{
        alert('Registration sucessfull');
  this.router.navigate(['login']);
      } 
      ,(user)=>{
        this.error="Email already exists";
      })
    }
}

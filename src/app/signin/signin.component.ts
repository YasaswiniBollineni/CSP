
import { Component  } from '@angular/core';
import { Router } from '@angular/router';
import {Signin,UniqueConstraintError,InsertedSuccess ,Read} from '../signin';
import {Subscription} from 'rxjs';
import {SigninService } from '../signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  email='';
  password='';
title = 'google';
  user:any;
  loggedIn:any;

  

  constructor(private Service:SigninService,private router:Router) {}

  Subscription:Subscription=new Subscription();
   User:Signin ={
    email:'',
  password:''
   };
   SuccessMsg='';
   ErrorMsg='';
   a=[];
  pass=this.User.password;
    Read() {
      this.Subscription = this.Service.Read(this.User.email).subscribe(
        (data)=>{
          if(data){
              console.log(data);
              this.a=data.Result[0];
               if(this.a[1]==this.User.password){
                  this.SuccessMsg="please " 
                  this.router.navigate(['/home']);
                  console.log("success");
                      
              
              }
              else{
                this.ErrorMsg="please enter valid credentials";
                console.log("please enter valid credentials");            
              }
              console.log(data.Result);
              console.log(this.a);
              

            }
          else{
              console.log("Failed");
              this.ErrorMsg="please enter valid credentials";

            }
         }
      )
      }
      ngOnDestroy() {
        this.Subscription.unsubscribe();
      }
     
}
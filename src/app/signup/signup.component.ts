import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Signup,UniqueConstraintError,InsertedSuccess ,Read} from '../signup';
import {Subscription} from 'rxjs';
import {SignupService} from '../signup.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  firstname='';
  lastname='';
  dob='';
  email='';
  password='';

  
  Subscription:Subscription=new Subscription();
   User:Signup ={
    firstname:'',
  lastname:'',
  dob:'',
  email:'',
  password:''
   };
   SuccessMsg='';
   ErrorMsg='';
   a=[];
   constructor(private Service:SignupService,private router:Router) {}

   Insert(form:NgForm){
    this.ErrorMsg='';
    this.SuccessMsg='';
       this.Subscription = this.Service.Insert(form.value).subscribe(
        (data:any)=>{
          if(data){
            console.log(data);
            // document.write("inserted succesfully");
            this.SuccessMsg="Inserted Succesfully"
             this.router.navigate(["/signin"])

          }
          else{
            console.log("Failed");
            alert("Unique constraint error");
            this.ErrorMsg="User Already Exists"
          }
        }
        
      )
      form.reset();
    }

}
 
  






import { Component } from '@angular/core';
import {Nutrition,UniqueConstraintError,InsertedSuccess ,Read} from '../nutrition';
import {Subscription} from 'rxjs';
import {SnutritionService} from '../snutrition.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent {
  
  ID_NO=0;
  Name='';
  Disease='';
  Ph_NO=0;
  Mail_ID='';
  City='';
  

  insertUser(item:any){
    this.ID_NO=item.ID_NO;
    console.log(this.ID_NO);
}
  constructor(private Service:SnutritionService) {}

  Subscription:Subscription=new Subscription();
   User:Nutrition ={
    ID_NO:0,
  Name:'',
  Disease:'',
  Ph_NO:0,
  Mail_ID:'',
  City:''
   };
   SuccessMsg='';
   ErrorMsg='';
   a=[];
   Insert(form:NgForm){
    this.ErrorMsg='';
    this.SuccessMsg='';
       this.Subscription = this.Service.Insert(form.value).subscribe(
        (data:any)=>{
          if(data){
            console.log(data);
            // document.write("inserted succesfully");
            this.SuccessMsg="Inserted Succesfully"

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
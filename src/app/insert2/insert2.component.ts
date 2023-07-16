import { Component } from '@angular/core';
import {Frequency,UniqueConstraintError,InsertedSuccess ,Read} from '../frequency';
import {Subscription} from 'rxjs';
import {FrequencyService} from '../frequency.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-insert2',
  templateUrl: './insert2.component.html',
  styleUrls: ['./insert2.component.css']
})
export class Insert2Component {



  ID_NO=0;
  Name='';
  Frequency='';
  Ph_NO=0;
  
  City='';

  insertUser(item:any){
    this.ID_NO=item.ID_NO;
    console.log(this.ID_NO);
}
  constructor(private Service:FrequencyService) {}

  Subscription:Subscription=new Subscription();
   User:Frequency ={
    ID_NO:0,
  Name:'',
  Frequency:'',
  Ph_NO:0,
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
import { Component } from '@angular/core';
import {Anganwadi,UniqueConstraintError,InsertedSuccess ,Read} from '../anganwadi';
import {Subscription} from 'rxjs';
import {AnganwadiService} from '../anganwadi.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-insert1',
  templateUrl: './insert1.component.html',
  styleUrls: ['./insert1.component.css']
})
export class Insert1Component {
  
  ID_NO=0;
  Name='';
  Anganwadi_center='';
  Ph_NO=0;
  
  City='';

  insertUser(item:any){
    this.ID_NO=item.ID_NO;
    console.log(this.ID_NO);
}
  constructor(private Service:AnganwadiService) {}

  Subscription:Subscription=new Subscription();
   User:Anganwadi ={
    ID_NO:0,
  Name:'',
  Anganwadi_center:'',
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
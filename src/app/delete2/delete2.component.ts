import { Component } from '@angular/core';

import {Frequency,UniqueConstraintError,InsertedSuccess ,Read} from '../frequency';
import {Subscription} from 'rxjs';
import { FrequencyService } from '../frequency.service';
@Component({
  selector: 'app-delete2',
  templateUrl: './delete2.component.html',
  styleUrls: ['./delete2.component.css']
})
export class Delete2Component {






  constructor(private Service:FrequencyService) {}
  ngOnInit() {
  }
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

  Delete() {
   this.SuccessMsg='';
   this.ErrorMsg='';
   this.Subscription = this.Service.Delete(this.User.ID_NO).subscribe(
          (data)=>{
           if(data){
             console.log(data);
             this.SuccessMsg="Deleted Succesfully"
           }
            else{
              console.log("Failed");
              this.ErrorMsg="failed Deleting"
            }
          }
        )
       }
}


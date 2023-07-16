import { Component } from '@angular/core';
import {Nutrition,UniqueConstraintError,InsertedSuccess ,Read} from '../nutrition';
import {Subscription} from 'rxjs';
import { SnutritionService } from '../snutrition.service';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  constructor(private Service:SnutritionService) {}
  ngOnInit() {
  }
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


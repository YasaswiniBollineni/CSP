import { Component } from '@angular/core';
import {Anganwadi,UniqueConstraintError,InsertedSuccess ,Read} from '../anganwadi';
import {Subscription} from 'rxjs';
import { AnganwadiService } from '../anganwadi.service';
@Component({
  selector: 'app-delete1',
  templateUrl: './delete1.component.html',
  styleUrls: ['./delete1.component.css']
})
export class Delete1Component {




  constructor(private Service:AnganwadiService) {}
  ngOnInit() {
  }
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


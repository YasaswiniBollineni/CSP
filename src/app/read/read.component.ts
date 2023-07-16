
import { Component } from '@angular/core';
import {Nutrition,UniqueConstraintError,InsertedSuccess ,Read} from '../nutrition';
import {Subscription} from 'rxjs';
import { SnutritionService } from '../snutrition.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent {
  canShowData:boolean=false;
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
     a=[]
  
  insertUser(item:any){}
    Read() {
      this.Subscription = this.Service.Read(this.User.ID_NO).subscribe(
            (data)=>{
              if(data){
                  this.canShowData=true;
                  console.log(data);
                  this.a=data.Result[0];
                  this.User ={
                    ID_NO:this.a[0],
                    Name:this.a[1],
                    Disease:this.a[2],
                    Ph_NO:this.a[3],
                    Mail_ID:this.a[4],
                    City:this.a[5],
                    
                   };
                  console.log(data.Result);
                  console.log(this.a);
  
                }
              else{
                  console.log("Failed");
                }
             }
          )
      }
      ngOnDestroy() {
        this.Subscription.unsubscribe();
      }
      
}
import { Component } from '@angular/core';

import {Anganwadi,UniqueConstraintError,InsertedSuccess ,Read} from '../anganwadi';
import {Subscription} from 'rxjs';
import { AnganwadiService } from '../anganwadi.service';

@Component({
  selector: 'app-read1',
  templateUrl: './read1.component.html',
  styleUrls: ['./read1.component.css']
})
export class Read1Component {
  canShowData:boolean=false;
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
                    Anganwadi_center:this.a[2],
                    Ph_NO:this.a[3],
                  
                    City:this.a[4],
                    
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

  
      

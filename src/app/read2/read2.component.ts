import { Component } from '@angular/core';
import {Frequency,UniqueConstraintError,InsertedSuccess ,Read} from '../frequency';
import {Subscription} from 'rxjs';
import { FrequencyService } from '../frequency.service';
@Component({
  selector: 'app-read2',
  templateUrl: './read2.component.html',
  styleUrls: ['./read2.component.css']
})
export class Read2Component {



  canShowData:boolean=false;
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
                  Frequency:this.a[2],
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

  
      

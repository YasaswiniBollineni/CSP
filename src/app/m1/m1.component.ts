import { Component, OnInit   } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-m1',
  templateUrl: './m1.component.html',
  styleUrls: ['./m1.component.css']

 
})

export class M1Component implements OnInit {


  constructor(private router:Router){}
  ngOnInit() {
    
  }
  onSc1Click(){
    this.router.navigateByUrl('/sc1')
  
  }
  onSc2Click(){
    this.router.navigateByUrl('/sc2')
  
  }
  onSc5Click(){
    this.router.navigateByUrl('/sc5')
  
  }
  onSc6Click(){
    this.router.navigateByUrl('/sc6')
  
  }
  onSc7Click(){
    this.router.navigateByUrl('/sc7')
  
  }
  onSc8Click(){
    this.router.navigateByUrl('/sc8')
  
  }
  onSc9Click(){
    this.router.navigateByUrl('/sc9')
  
  }
  
  onSc10Click(){
    this.router.navigateByUrl('/sc10')
  
  }
  onSc11Click(){
    this.router.navigateByUrl('/sc11')
  
  }
  onSc12Click(){
    this.router.navigateByUrl('/sc12')
  
  }
  onInsertClick(){
    this.router.navigateByUrl('/insert')
  
  }
  onUpdateClick(){
    this.router.navigateByUrl('/update')
  
  }
  onDeleteClick(){
    this.router.navigateByUrl('/delete')
  
  }
  onReadClick(){
    this.router.navigateByUrl('/read')
  
  }
  onDelete1Click(){
    this.router.navigateByUrl('/delete1')
  
  }
  onRead1Click(){
    this.router.navigateByUrl('/read1')
  
  }
  onInsert1Click(){
    this.router.navigateByUrl('/insert1')
  
  }
  onUpdate1Click(){
    this.router.navigateByUrl('/update1')
  
  }
  onDelete2Click(){
    this.router.navigateByUrl('/delete2')
  
  }
  onRead2Click(){
    this.router.navigateByUrl('/read2')
  
  }
  onInsert2Click(){
    this.router.navigateByUrl('/insert2')
  
  }
  onUpdate2Click(){
    this.router.navigateByUrl('/update2')
  
  }

}

  

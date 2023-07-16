
import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private router:Router){}
  ngOnInit() {
    
  }
  onM1Click(){
    this.router.navigateByUrl('/m1')
  
  }
  onSc3Click(){
    this.router.navigateByUrl('/sc3')
  
  }
  onSc4Click(){
    this.router.navigateByUrl('/sc4')
  
  }
  onNecClick(){
    this.router.navigateByUrl('/nec')
  
  }
  
  

}

  

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { M1Component } from './m1/m1.component';
import { Sc1Component } from './sc1/sc1.component';
import { Sc2Component } from './sc2/sc2.component';
import { Sc3Component } from './sc3/sc3.component';
import { Sc4Component } from './sc4/sc4.component';
import { Sc5Component } from './sc5/sc5.component';
import { Sc6Component } from './sc6/sc6.component';
import { Sc7Component } from './sc7/sc7.component';
import { Sc8Component } from './sc8/sc8.component';
import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { ReadComponent } from './read/read.component';
import { Sc9Component } from './sc9/sc9.component';
import { Sc10Component } from './sc10/sc10.component';
import { Sc11Component } from './sc11/sc11.component';
import { Sc12Component } from './sc12/sc12.component';
import { Sc13Component } from './sc13/sc13.component';
import { SigninComponent } from './signin/signin.component';
import { Insert1Component } from './insert1/insert1.component';
import { Delete1Component } from './delete1/delete1.component';
import { Update1Component } from './update1/update1.component';
import { Read1Component } from './read1/read1.component';
import { Insert2Component } from './insert2/insert2.component';
import { Delete2Component } from './delete2/delete2.component';
import { Update2Component } from './update2/update2.component';
import { Read2Component } from './read2/read2.component';
import { NecComponent } from './nec/nec.component';


const routes: Routes = [
  {
    path:'mainpage',
    component:MainpageComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'signin',
    component:SigninComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'m1',
    component:M1Component
  },
  {
    path:'sc1',
    component:Sc1Component
  },
  {
    path:'sc2',
    component:Sc2Component
  },
  {
    path:'sc3',
    component:Sc3Component
  },
  {
    path:'sc4',
    component:Sc4Component
  },
  {
    path:'sc5',
    component:Sc5Component
  },
  {
    path:'sc6',
    component:Sc6Component
  },
  {
    path:'sc7',
    component:Sc7Component
  },
  {
  path:'sc8',
  component:Sc8Component
  },
  {
    path:'sc10',
    component:Sc10Component
    },
    {
      path:'sc11',
      component:Sc11Component
      },
      {
        path:'sc12',
        component:Sc12Component
      },
  {
    path:'insert',
    component:InsertComponent
  },
  {
    path:'update',
    component:UpdateComponent
  },
  {
    path:'delete',
    component:DeleteComponent
  },
  {
    path:'read',
    component:ReadComponent
  },
  {
    path:'sc9',
    component:Sc9Component
  },
  {
    path:'sc13',
    component:Sc13Component
  },
  {
    path:'insert1',
    component:Insert1Component
  },
  {
    path:"delete1",
    component:Delete1Component
  },
  {
    path:'update1',
    component:Update1Component
  },
  {
    path:'read1',
    component:Read1Component
  },
  {
    path:'insert2',
    component:Insert2Component
  },
  {
    path:"delete2",
    component:Delete2Component
  },
  {
    path:'update2',
    component:Update2Component
  },
  {
    path:'read2',
    component:Read2Component
  },
  {
    path:'nec',
    component:NecComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

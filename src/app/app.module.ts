import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SignupComponent } from './signup/signup.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { M1Component } from './m1/m1.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Sc1Component } from './sc1/sc1.component';
import {MatCardModule} from '@angular/material/card';
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
import { HttpClientModule } from '@angular/common/http';
import { Sc9Component } from './sc9/sc9.component';
import { Sc10Component } from './sc10/sc10.component';
import { Sc11Component } from './sc11/sc11.component';
import { Sc12Component } from './sc12/sc12.component';
import { Sc13Component } from './sc13/sc13.component';
import { SigninComponent } from './signin/signin.component';
import { Insert1Component } from './insert1/insert1.component';
import { Delete1Component } from './delete1/delete1.component';
import { Read1Component } from './read1/read1.component';
import { Update1Component } from './update1/update1.component';
import { Insert2Component } from './insert2/insert2.component';
import { Update2Component } from './update2/update2.component';
import { Read2Component } from './read2/read2.component';
import { Delete2Component } from './delete2/delete2.component';
import { NecComponent } from './nec/nec.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
  
    SignupComponent,
    HomeComponent,
    M1Component,
    Sc1Component,
    Sc2Component,
    Sc3Component,
    Sc4Component,
    Sc5Component,
    Sc6Component,
    Sc7Component,
    Sc8Component,
    InsertComponent,
    UpdateComponent,
    DeleteComponent,
    ReadComponent,
    Sc9Component,
    Sc10Component,
    Sc11Component,
    Sc12Component,
    Sc13Component,
    SigninComponent,
    Insert1Component,
    Delete1Component,
    Read1Component,
    Update1Component,
    Insert2Component,
    Update2Component,
    Read2Component,
    Delete2Component,
    NecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    MatToolbarModule,
    RouterModule,
    MatCardModule,
    RouterModule.forRoot([
      {path: '', redirectTo:'/mainpage',pathMatch:'full'}
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

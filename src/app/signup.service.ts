
import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from'@angular/common/http';
import {Signup,UniqueConstraintError,InsertedSuccess ,Read} from './signup';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {




  constructor(private http:HttpClient) { }
  headers = new HttpHeaders({
    'content-type':'application/json',
    Authentication:'Bearer' + localStorage.getItem('token'),
  });
  private url ='http://localhost:3001/';

  Insert(
    Details:Signup
  ):Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'signup/Insert',
      Details,
      {headers:this.headers}
    );

  } 
  Read(email:string):Observable<InsertedSuccess>{
    console.log(`${this.url}signup/Read${email}`);
    return this.http.get<InsertedSuccess>(
      `${this.url}signup/Read${email}`

    );
  }
  
  Delete(email:string):Observable<InsertedSuccess>{
    console.log(`${this.url}signup/Delete${email}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}signup/Delete${email}`
    );
  }
  Update(
    email:string,Details:Signup) {
    return this.http.put(`${this.url }register/Update${email}`,Details,{headers:this.headers}
    );
}
}
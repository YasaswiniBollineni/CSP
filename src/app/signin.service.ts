
import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from'@angular/common/http';
import {Signin,UniqueConstraintError,InsertedSuccess ,Read} from './signin';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigninService {



  constructor(private http:HttpClient) { }
  headers = new HttpHeaders({
    'content-type':'application/json',
    Authentication:'Bearer' + localStorage.getItem('token'),
  });
  private url ='http://localhost:3001/';

  Insert(
    Details:Signin
  ):Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'signin/Insert',
      Details,
      {headers:this.headers}
    );

  } 
  Read(email:string):Observable<InsertedSuccess>{
    console.log(`${this.url}signin/Read${email}`);
    return this.http.get<InsertedSuccess>(
      `${this.url}signin/Read${email}`
    );
  }
  
  Delete(email:string):Observable<InsertedSuccess>{
    console.log(`${this.url}signin/Delete${email}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}signin/Delete${email}`
    );
  }
  Update(
    email:string,Details:Signin) {
    return this.http.put(`${this.url }signin/Update${email}`,Details,{headers:this.headers}
    );
}
}
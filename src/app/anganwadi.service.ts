import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from'@angular/common/http';
import {Anganwadi,UniqueConstraintError,InsertedSuccess,Read} from './anganwadi';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AnganwadiService {

  constructor(private http:HttpClient) { }

  headers = new HttpHeaders({
    'content-type':'application/json',
    Authentication:'Bearer' + localStorage.getItem('token'),
  });
  private url ='http://localhost:3001/';

  Insert(
    Details:Anganwadi
  ):Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'varsha/Insert',
      Details,
      {headers:this.headers}
    );

  } 
  Read(ID_NO:number):Observable<InsertedSuccess>{
    console.log(`${this.url}varsha/Read${ID_NO}`);
    return this.http.get<InsertedSuccess>(
      `${this.url}varsha/Read${ID_NO}`
    );
  }
  
  Delete(ID_NO:number):Observable<InsertedSuccess>{
    console.log(`${this.url}varsha/Delete${ID_NO}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}varsha/Delete${ID_NO}`
    );
  }
  Update(
    ID_NO:number,Details:Anganwadi) {
    return this.http.put(`${this.url }varsha/Update${ID_NO}`,Details,{headers:this.headers}
    );
}
}
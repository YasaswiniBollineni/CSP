
import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from'@angular/common/http';
import {Nutrition,UniqueConstraintError,InsertedSuccess,Read} from './nutrition';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SnutritionService {

  constructor(private http:HttpClient) { }
  headers = new HttpHeaders({
    'content-type':'application/json',
    Authentication:'Bearer' + localStorage.getItem('token'),
  });
  private url ='http://localhost:3001/';

  Insert(
    Details:Nutrition
  ):Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'yashu/Insert',
      Details,
      {headers:this.headers}
    );

  } 
  Read(ID_NO:number):Observable<InsertedSuccess>{
    console.log(`${this.url}yashu/Read${ID_NO}`);
    return this.http.get<InsertedSuccess>(
      `${this.url}yashu/Read${ID_NO}`
    );
  }
  
  Delete(ID_NO:number):Observable<InsertedSuccess>{
    console.log(`${this.url}yashu/Delete${ID_NO}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}yashu/Delete${ID_NO}`
    );
  }
  Update(
    ID_NO:number,Details:Nutrition) {
    return this.http.put(`${this.url }yashu/Update${ID_NO}`,Details,{headers:this.headers}
    );
}
}
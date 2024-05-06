import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviromente } from '../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    return this.http.get<any>(`${enviromente.API_URL}/products`)
  }
}

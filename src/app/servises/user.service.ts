import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUserModel} from "../models/iUserModel";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url='https://jsonplaceholder.typicode.com/users'
  constructor(private httpClient:HttpClient) { }

  getUsers():Observable<IUserModel[]>{
    return this.httpClient.get<IUserModel[]>(this.url)
  }
}

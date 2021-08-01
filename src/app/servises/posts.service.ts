import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPostModel} from "../models/IPostModel";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url='https://jsonplaceholder.typicode.com/posts'
  constructor(private httpClient:HttpClient) { }
  getPosts():Observable<IPostModel[]>{
    return this.httpClient.get<IPostModel[]>(this.url)
  }
}

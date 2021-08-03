import { Component, OnInit } from '@angular/core';
import {IPostModel} from "../../models/iPostModel";
import {PostsService} from "../../servises/posts.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts:IPostModel[]
  constructor(private postService:PostsService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(value => this.posts=value)
  }

}

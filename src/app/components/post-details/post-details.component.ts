import { Component, OnInit } from '@angular/core';
import {IPostModel} from "../../models/IPostModel";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  post:IPostModel
  constructor(private router:Router) {
    //console.log(history.state);
    this.post=this.router.getCurrentNavigation()?.extras.state as IPostModel
  }

  ngOnInit(): void {
  }

  back() {
    history.back()
  }
}

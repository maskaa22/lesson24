import { Component, OnInit } from '@angular/core';
import {IPostModel} from "../../models/iPostModel";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  post:IPostModel
  constructor(private router:Router, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      // console.log(value);
      this.post=this.router.getCurrentNavigation()?.extras.state as IPostModel

    })

  }

  ngOnInit(): void {
  }


}

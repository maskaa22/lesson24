import {Component, Input, OnInit} from '@angular/core';
import {IPostModel} from "../../models/iPostModel";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input()
  post:IPostModel
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToDetailsPost() {
    this.router.navigate(['posts', this.post.id], {state: this.post})
  }
}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IUserModel} from "../../models/IUserModel";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user:IUserModel
  constructor(private router:Router, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(val=>console.log(val))
    console.log('sdsdc');
    //console.log(history.state);
    // this.activatedRoute.params.subscribe(value => {
    //   console.log(value);
    // this.user = this.router.getCurrentNavigation()?.extras.state as IUserModel
    // })

  }

  ngOnInit(): void {
  }

  back() {
    history.back()
  }
}

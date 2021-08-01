import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {IUserModel} from "../../models/IUserModel";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user:IUserModel
  constructor(private router:Router) {
    // console.log(history.state);
    this.user = this.router.getCurrentNavigation()?.extras.state as IUserModel
  }

  ngOnInit(): void {
  }

  back() {
    history.back()
  }
}

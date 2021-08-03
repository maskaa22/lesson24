import { Component, OnInit } from '@angular/core';
import {UserService} from "../../servises/user.service";
import {IUserModel} from "../../models/iUserModel";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users:IUserModel[]
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users=value)
  }

}

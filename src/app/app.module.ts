import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import {HttpClientModule} from "@angular/common/http";
import { UserDetailsComponent } from './components/user-details/user-details.component';
import {UserGuardService} from "./servises/user-guard.service";

let routes:Routes = [
  {path: '', component:UsersComponent, canDeactivate:[UserGuardService]},
  {path:'users/:id', component:UserDetailsComponent, canActivate:[UserGuardService], canDeactivate:[UserGuardService]},
  {path:'users', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

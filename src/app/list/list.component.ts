import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-users';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  selectedUser:User = null;
  userData=USERS;

  constructor() { }

  ngOnInit() {
    console.log('In alist.component.ts onInit() function ')
  }

  getCurrentUser(user) : void {
      this.selectedUser=user;
      console.log(this.selectedUser);
      console.log(`selectedUser = ${JSON.stringify(this.selectedUser)}`);
  }
  getAll(){
    console.log("All selected");
  }
  getPending(){
    console.log("Pending selected");
  }
  getApproved(){
    console.log("Approved selected");
  }
  getRejected(){
    console.log("Rejected selected");
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

public user :any = {};
  constructor(private _userService: UserService ,private router: Router ) { }

createUser(){
  this._userService.createUser(this.user)
  .subscribe(user =>
  {
      this.router.navigate(['/user']);
      this.user= user
  }
  );
  
}

  ngOnInit() {
  }



}

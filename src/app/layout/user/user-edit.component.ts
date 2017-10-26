import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../../models/user.model';
import { Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  // styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

user :any={};
  constructor(private router: Router, private _userService:UserService, private route:ActivatedRoute) { }

  updateUser(){
    this._userService.updateUser(this.user);
    this.router.navigate(['/user']);
      }
  getUserById(id: number){
    this._userService.getUserById(id)
    .subscribe(user =>
         this.user = user
    );
  }

  ngOnInit() {
     this.route.params.subscribe(params => {
            const id = Number.parseInt(params['id']);
            this.user.userID = id;
        });
        this.getUserById(this.user.userID);
  }

}

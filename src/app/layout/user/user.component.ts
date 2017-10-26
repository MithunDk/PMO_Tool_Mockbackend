import { Component, OnInit, EventEmitter} from '@angular/core';
import { UserService } from './user.service';
import { User } from '../../models/user.model';
import { Router, ActivatedRoute} from '@angular/router';
import { MaterializeAction } from 'angular2-materialize';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users : User[] =[];
  public activeUsers : User[] =[];
  public inactiveUsers : User[] =[];
  user:any ={};
  activeuser:any ={};
  inactiveuser: any ={};
  showss:boolean;
  shows:boolean;
  show: boolean;
  public userr : any =[];
  isChecked : boolean = false;
  use :any ={};
  UserIndex :any={};
  public isIn :number = 0 ;
  constructor(private _userService : UserService, private router:Router) { }

  toggleState(use, UserIndex){
    let identify : boolean;
    let indexVal: number;
    for(let i=0;i<this.userr.length; i++){
      let user = this.userr[i];
    if(use.userID == user.userID)
      {//match
      identify = true;
      indexVal=i;
      break;
      }}
      // if(this.userr.indexOf(use.userID)){
      //   this.userr.splice(i,1);
      // }
  if(identify)
      {
      this.userr.splice(indexVal,1);
      }else{
       this.userr.push(use);
      }
    }
  toggleState1(use,index){
    for(let i=0; i< this.userr.length;i++){
      let user=this.userr[i];
      if(use.userID == user.userID){
        this.userr.splice(i,1);
        use.isChecked = false;
      }
    }
  }
 
 private getUsers(){
   this.show = true;
   this.shows = false;
   this.showss=false;
 }

 private getAllUsers(){
   this._userService.getAllUsers()
    .subscribe(users =>
       this.users=users);
     
 }
 deleteUser(id: number) {
      this._userService.deleteUser(id)
      .subscribe(user => {
        this.router.navigate(['/user']);
        this.user = user
      }
      );
      
    }
postactiveUsers(user, id){
    
  this._userService.postactiveUsers(user)
     .subscribe(user => {
       this.router.navigate(['/user']);
       this.user = user
     });
  this._userService.deleteUser(id)
      .subscribe(user => {
        this.router.navigate(['/user']);
        this.user = user
      }
      );
     
  }
getActiveUsers(){
  this.shows = true;
  this.show=false;
  this.showss=false;
  this._userService.getActiveUsers()
  .subscribe(activeUsers => {
    this.activeUsers = activeUsers });
}

deleteActiveUser(id:number){
  
  this._userService.deleteActiveUser(id)
  .subscribe(activeuser => {
        this.router.navigate(['/user']);
        this.activeuser = activeuser
      }
      );
        
}
postinactiveUsers(activeuser, id){
    
  this._userService.postinactiveUsers(activeuser)
     .subscribe(activeuser => {
       this.router.navigate(['/user']);
       this.activeuser = activeuser
     });
  this._userService.deleteActiveUser(id)
      .subscribe(activeuser => {
        this.router.navigate(['/user']);
        this.activeuser = activeuser;
      }
      );
     
  }
getInactiveUsers(){
  this.showss = true;
  this.show=false;
  this.shows = false;
  this._userService.getInactiveUsers()
  .subscribe(inactiveUsers => {
    this.inactiveUsers = inactiveUsers });
}
postReactiveUsers(inactiveuser, id){
    this._userService.postReactiveUsers(inactiveuser)
    .subscribe(inactiveuser => {
       this.inactiveuser = inactiveuser;
    });
    this._userService.deleteInactiveUser(id)
     .subscribe(inactiveuser => {
       this.inactiveuser = inactiveuser;
     });
}

modalActions = new EventEmitter <string|MaterializeAction>();
  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  }
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }

  ngOnInit() {
     this.getAllUsers();
     this.show = true;
     this.shows = false;
     this.showss = false;
  
  }

}

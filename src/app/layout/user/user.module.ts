import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { MaterializeModule } from 'angular2-materialize';
import { HttpModule } from "@angular/http";
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { UserBackendProvider } from '../../mockBackend/user.mock.backend';
import { FormsModule } from '@angular/Forms';
import { NgModel } from '@angular/Forms';
import { UserEditComponent } from './user-edit.component';
import { UserCreateComponent } from './user-create.component';
import { UserService } from './user.service';
import { UseractiveComponent } from './useractive/useractive.component';
import { UserinactiveComponent } from './userinactive/userinactive.component';


@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        MaterializeModule,
        HttpModule,
        FormsModule
    ],
    declarations : [ 
      UserComponent ,
      UserEditComponent,
      UserCreateComponent,
      UseractiveComponent,
      UserinactiveComponent,
      
      ],
   providers: [
    MaterializeModule,
    UserService,
    UserBackendProvider,
    MockBackend,
    BaseRequestOptions
  ]
})

export class UserModule { }
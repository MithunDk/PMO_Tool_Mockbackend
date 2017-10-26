import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginRouteModule } from './login-routing.module';
import { LoginComponent } from './login.component';
//import { RegistrationComponent } from '../registration/registration.component';
import {FormsModule} from '@angular/Forms';

@NgModule({
    imports: [
        CommonModule,
        LoginRouteModule,
        FormsModule,
    ],
    declarations: [LoginComponent,
        ]
})

export class LoginModule {

}
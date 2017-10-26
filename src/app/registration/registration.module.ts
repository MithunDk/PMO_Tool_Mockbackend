import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationRouteModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import {FormsModule} from '@angular/Forms';

@NgModule({
    imports: [
        CommonModule,
        RegistrationRouteModule,
        FormsModule,
    ],
    declarations: [RegistrationComponent]
})

export class RegistrationModule {

}
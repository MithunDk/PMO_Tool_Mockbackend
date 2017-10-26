import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './shared/authguard.service';
import { MaterializeModule } from 'angular2-materialize';
import {DemandBackendProvider} from './mockBackend/demand.mock.backend';
import {DemandService} from './layout/demand/demand.service';
import { UserService } from './layout/user/user.service';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/Forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [AuthGuard,MaterializeModule,  
    DemandService,      
    DemandBackendProvider,
    MockBackend,
    BaseRequestOptions,
    UserService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

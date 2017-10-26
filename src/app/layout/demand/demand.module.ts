import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandRoutingModule } from './demand-routing.module';
import { DemandService } from './demand.service';
import { SupplyService } from '../supply/supply.service';
import { DemandComponent } from './demand.component';
import { DemandCreateComponent } from './demand-create.component';
import { SupplyComponent } from '../supply/supply.component';
import { MaterializeModule } from 'angular2-materialize';
import { HttpModule } from "@angular/http";
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { DemandBackendProvider } from '../../mockBackend/demand.mock.backend';
import { FormsModule } from '@angular/Forms';
import { NgModel } from '@angular/Forms';
import { DemandEditComponent } from './demand-edit.component';


@NgModule({
  imports: [
    CommonModule,
    DemandRoutingModule,
    MaterializeModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    DemandComponent,
    DemandCreateComponent,
    DemandEditComponent,
    SupplyComponent
  ],
  providers: [
    MaterializeModule,
    DemandService,
    SupplyService,
    DemandBackendProvider,
    MockBackend,
    BaseRequestOptions
  ]
})
export class DemandModule { }

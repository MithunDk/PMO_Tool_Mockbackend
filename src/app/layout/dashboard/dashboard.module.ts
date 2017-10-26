import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboad-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MaterializeModule } from 'angular2-materialize';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MaterializeModule
    ],
    declarations : [ DashboardComponent ]
})

export class DashboardModule { }
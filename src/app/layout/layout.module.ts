import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from '../shared/component/header/header.component';
import { NavbarComponent } from '../shared/component/navbar/navbar.component';
import { MaterializeModule } from 'angular2-materialize';

import { FormsModule } from '@angular/Forms';


//import { SupplyComponent } from './supply/supply.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        MaterializeModule,
        FormsModule
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        NavbarComponent,
       
        // SupplyComponent,

    ],
    providers: [MaterializeModule]
})

export class LayoutModule {

}
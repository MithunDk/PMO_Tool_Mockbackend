import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemandComponent } from './demand.component';
import { DemandCreateComponent } from './demand-create.component';
import { SupplyComponent } from '../supply/supply.component';
import {DemandEditComponent} from './demand-edit.component';

const routes: Routes = [
    { path: '', component: DemandComponent },
    { path: 'create', component: DemandCreateComponent },
    {path: 'update/:id', component: DemandEditComponent },
    {path: 'delete/:id', component: DemandEditComponent},
    { path: 'supply/:id', component: SupplyComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DemandRoutingModule{
    
}
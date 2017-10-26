import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard',loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'demand',loadChildren: './demand/demand.module#DemandModule' },
            { path: 'user', loadChildren:'./user/user.module#UserModule'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LayoutRoutingModule{

}
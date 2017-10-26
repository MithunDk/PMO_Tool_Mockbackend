import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserCreateComponent } from './user-create.component';
import { UserEditComponent } from './user-edit.component';
import { UseractiveComponent} from './useractive/useractive.component';
import { UserinactiveComponent } from './userinactive/userinactive.component';

const routes: Routes = [
    { path: '', component: UserComponent },
    { path:'create', component: UserCreateComponent},
    { path:'update/:id', component: UserEditComponent},
    { path:'activeusers', component: UseractiveComponent },
    { path:'inactiveusers', component:UserinactiveComponent}, 
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutingModule{
    
}
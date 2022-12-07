import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminHomeComponent} from "./admin-home/admin-home.component";
import {ManagePhrasesComponent} from "./manage-phrases/manage-phrases.component";
import {ManageUsersComponent} from "./manage-users/manage-users.component";
import {CanActivateGuard} from "../shared/can-activate.guard";

const routes: Routes = [
  {
    path: 'admin',
    component: AdminHomeComponent,
    canActivate: [CanActivateGuard],
    children: [
      {path: 'phrases', component: ManagePhrasesComponent},
      {path: 'users', component: ManageUsersComponent},
      {path: '', redirectTo: 'phrases', pathMatch: 'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}

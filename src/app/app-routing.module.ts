import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './project/poc/create-user/create-user.component';
import { MyProfileComponent } from './project/poc/my-profile/my-profile.component';
import { PocComponent } from './project/poc/poc.component';

const routes: Routes = [
  { path: '', redirectTo: '/poc', pathMatch: 'full' },
  { path: 'poc', component: PocComponent },
  { path: 'create' , component: CreateUserComponent},
  { path: 'myProfile' , component: MyProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

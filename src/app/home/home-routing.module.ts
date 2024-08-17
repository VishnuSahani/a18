import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateMemberComponent } from './create-member/create-member.component';

const routes: Routes = [
  {
    path :"",
    component : HomeComponent
  },
  {
    path:"add-member",
    component: CreateMemberComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

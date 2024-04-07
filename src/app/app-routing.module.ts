import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GetoneComponent } from './getone/getone.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"add",component:GetoneComponent},
  {path:"add/:id",component:GetoneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

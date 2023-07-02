import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateordersComponent } from './createorders/createorders.component';

const routes: Routes = [
  {path:'createorders',component:CreateordersComponent},
  {path:'',redirectTo:'orders',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyWorkComponent } from './my-work.component';

const projRoutes: Routes = [
  {
    path: '',
    component: MyWorkComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(projRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProjRoutingModule {}

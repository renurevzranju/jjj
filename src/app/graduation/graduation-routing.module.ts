import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraduationComponent } from './graduation.component';

const gradRoutes: Routes = [
  {
    path: '',
    component: GraduationComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(gradRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class GradRoutingModule {}

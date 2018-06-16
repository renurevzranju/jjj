import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent }    from './not-found.component';
import { HomeComponent } from '../app/home/home.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { GraduationComponent } from './graduation/graduation.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';

const appRoutes: Routes = [
  {
    path: '/',
    component: HomeComponent
  },
  {
    path: 'myProjects',
    component: MyWorkComponent
  },
  {
    path: 'graduation',
    component: GraduationComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [ ],
  declarations: [PageNotFoundComponent]
})
export class AppRoutingModule { }

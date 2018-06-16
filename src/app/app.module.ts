import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomeComponent } from './home/home.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { GraduationComponent } from './graduation/graduation.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AppBootstrapModule } from './app-bootstrap.module';
import { AccordionModule } from "ngx-accordion";
import { AgmCoreModule } from '@agm/core';
import { NgCircleProgressModule } from 'ng-circle-progress';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'myProjects', component: MyWorkComponent },
  { path: 'graduation', component: GraduationComponent },
  { path: 'resume', component:  ResumeComponent},
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    MyWorkComponent,
    GraduationComponent,
    ResumeComponent,
    FooterComponent,
    HeaderComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AppBootstrapModule,
    AccordionModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBgul8J2nfRvouwq-Vs6Z63jmRm8GhTm_Y'
    }),
    NgCircleProgressModule.forRoot({
      "radius": 60,
      "space": -10,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#4882c2",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 10,
      "showTitle": true,
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": true,
      "showSubtitle" :false,
      "showBackground": false,
      "titleFontSize": "30",
      "unitsFontSize": '20',
      "titleColor": "white",
      "unitsColor": "white"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

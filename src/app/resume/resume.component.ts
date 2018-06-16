import { Component, OnInit } from '@angular/core';
import { SKILLS, Tech } from './skills';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  skillSet: any;
  technology: any;
  constructor() { }

  ngOnInit() {
    this.skillSet = this.getskills();
    this.technology = this.getTechnology();
  }

  getskills(){
     return SKILLS; 
  }

  getTechnology(){
    return Tech;
  }

}

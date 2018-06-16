import { Component, OnInit } from '@angular/core';
import { Tech } from './portfolio';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.css']
})
export class MyWorkComponent implements OnInit {
  technology: any;
  constructor() { }

  ngOnInit() {
    this.technology = this.getTechnology();
  }

  getTechnology(){
    return Tech;
  }
}

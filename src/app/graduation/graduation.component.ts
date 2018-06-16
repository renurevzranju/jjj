import { Component, OnInit } from '@angular/core';
import {AccordionModule} from "ngx-accordion";
import * as $ from 'jquery';

@Component({
  selector: 'app-graduation',
  templateUrl: './graduation.component.html',
  styleUrls: ['./graduation.component.css']
})
export class GraduationComponent implements OnInit {
  acc: any;
  constructor() { }

  ngOnInit() {
  }


}

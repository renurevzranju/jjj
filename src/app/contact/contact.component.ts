import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  nameList: any;  
  data = [];
  nameId:Number;
  constructor() { 
    this.data=["Austriala","Japan","India","Russia","Italy","Mexico","Canada"]
  }

  ngOnInit() {
  }     
}  

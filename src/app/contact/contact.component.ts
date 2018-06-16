import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  nameList: any;  
  data={
    name:"",
    email:"",
    message:""
  }
  nameId:Number;
  constructor() { 
  }

  ngOnInit() {
  }   
  
  Submit(){
    this.data.name="";
    this.data.email="";
    this.data.message="";
  }
}  

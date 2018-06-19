import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  dt:any;
  greet: string;
  thehours = new Date().getHours();
  Gm: string = 'Good Morning';
  Ga: string = 'Good Afternoon';
  Ge: string = 'Good Evening';
  
  constructor() { 
    this.dt= new Date();
    if(this.thehours > 3){
      this.greet = this.Gm
    }else if(this.thehours >= 12 && this.thehours < 17 ){
      this.greet = this.Ga    
    }else{
      this.greet = this.Ge
    }
  }
  
  ngOnInit() {
  }
  
}

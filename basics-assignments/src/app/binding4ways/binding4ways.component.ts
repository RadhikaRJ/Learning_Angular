import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding4ways',
  templateUrl: './binding4ways.component.html',
  styleUrls: ['./binding4ways.component.css']
})
export class Binding4waysComponent implements OnInit {
  userInput="type here";
  secondInput="";
  

  constructor( ) {

  }

  ngOnInit(): void {
  }
   
  onClearInput(){
    
    this.secondInput='';
  }
  

}

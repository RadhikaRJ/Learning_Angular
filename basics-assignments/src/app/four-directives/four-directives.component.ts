import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-four-directives',
  templateUrl: './four-directives.component.html',
  styleUrls: ['./four-directives.component.css']
})
export class FourDirectivesComponent implements OnInit {

 
  flag: boolean;
  flag1 : boolean;
  log = [];
  log1 = [];

  constructor() { 
    this.flag1=false;
    this.flag=false;
  }

  ngOnInit(): void {
  }

  
  onDisplayDetails()
  {
   this.flag1 = !this.flag1;
   this.log.push(this.log.length + 1);
   this.log1.push(new Date());

  }

    
    
  
}

import { Component, OnInit } from '@angular/core';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {


  a = 10;
  b = 5;
  str = 'yes';

  constructor() { 
    
  }

  ngOnInit() {
  }

  myFunc() {
    return true;
  }

  

}

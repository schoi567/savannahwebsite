import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allevents',
  templateUrl: './allevents.component.html',
  styleUrls: ['./allevents.component.css']
})
export class AlleventsComponent  {
  constructor(private router: Router) { }
MOU() { this.router.navigate(["/svntechmou"]);
   

} 
events() {
  this.router.navigate(["/events"]);
console.log("404notexist"); 

} 
  
 

}

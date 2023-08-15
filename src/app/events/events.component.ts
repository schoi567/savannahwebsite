import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  Groundbreaking: string[]= [];
  
  bd() {
    for(let i = 0; i < 32; i++ ){
     let bd1 = "assets/Groundbreaking/" + i.toString() + " " + "Groundbreaking.jpg";
      
    console.log(bd1)

    if (i === 3 || i === 2 || i === 2|| i === 25 || i === 26 || i === 27|| i === 28 || i === 31) { // Corrected condition to skip index 3
      continue;
    }
   this.Groundbreaking.push(bd1); 
      
    }
  }

  ngOnInit(): void {  this.bd();}


 
 
 

 
}

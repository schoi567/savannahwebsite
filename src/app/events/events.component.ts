import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  Groundbreaking: string[]= [];
  

  bd() {
    for(let i = -1; i < 13; i++ ){
     let bd1 = "assets/Groundbreaking/" + i.toString() + " " + "Groundbreaking.jpg";
      
    console.log(bd1)
 
    if (i === 2 || i === 3 ) { // Corrected condition to skip index 3
      continue;
    }
    
   this.Groundbreaking.push(bd1); 
      
    }
  }

  ngOnInit(): void {  this.bd();}


 
 
 

 
}

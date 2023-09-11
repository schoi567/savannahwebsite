import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {


  constructor(private router: Router) { }
  Plantpic = 'assets/Seoyon E Hwa Plant.jpg';
  Affilates = 'assets/affilates.png';
 
homepage()
{this.router.navigate([""]);}


about()
{this.router.navigate(["/about"]);}

}

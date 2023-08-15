import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  imageUrl = 'assets/logo.png';
  constructor(private router: Router) { }
homepage()
{this.router.navigate([""]);}

careers()
{this.router.navigate(["/careers"]);}

about()
{this.router.navigate(["/about"]);}


contacts()
{this.router.navigate(["/contacts"]);}

events()
{this.router.navigate(["/events"]);}
 
login()
{this.router.navigate(["/login"]);}



onOptionSelected(event: any): void {
  const selectedValue = event.target.value;
  switch (selectedValue) {
    case 'home':
      this.homepage();
      break;
    case 'about':
      this.about();
      break;
    case 'contacts':
      this.contacts();
      break;
    case 'careers':
      this.careers();
      break;
    case 'events':
      this.events();
      break;
    default:
      // Handle default case
      break;
  }
}



 
}

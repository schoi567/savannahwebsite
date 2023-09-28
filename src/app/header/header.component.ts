import { Component, HostListener  } from '@angular/core';
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
{this.router.navigate(["/allevents"]);}
 
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
    case 'login':
      this.login();
      break;  
    default:
      // Handle default case
      break;
  }
}

isSmallScreen: boolean = window.innerWidth < 960;

@HostListener('window:resize', ['$event'])
onResize(event: { target: { innerWidth: number; }; }) {
  this.isSmallScreen = event.target.innerWidth < 960;
}

 
}
